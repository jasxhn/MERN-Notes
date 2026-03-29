import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      setError("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/auth/register", formData);
      const message = res.data?.message || "Registration successful! Redirecting to login...";
      setSuccess(message);
      toast.success("Registration successful");
      setTimeout(() => {
        navigate("/login");
      }, 800);
    } catch (error) {
      const message = error.response?.data?.message || "Registration failed";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-base-content/10 bg-base-100 p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-2">Register</h1>
        <p className="text-center text-base-content/70 mb-6">Create your account to start saving notes</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Create a password"
            />
          </div>

          {error && <p className="text-sm text-error">{error}</p>}
          {success && <p className="text-sm text-success">{success}</p>}

          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-base-content/70 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="link link-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
