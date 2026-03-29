import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { LogOutIcon, PlusIcon } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-3xl font-bold text-primary font-mono tracking-tight">
            SimpleNotes
          </Link>
          <div className="flex items-center gap-3">
            {token ? (
              <>
                {location.pathname !== "/create" && (
                  <Link to="/create" className="btn btn-primary">
                    <PlusIcon className="size-5" />
                    <span>New Note</span>
                  </Link>
                )}
                <button type="button" onClick={handleLogout} className="btn btn-outline">
                  <LogOutIcon className="size-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
