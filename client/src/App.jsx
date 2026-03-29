import { Navigate, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import NoteDetailPage from "./pages/NoteDetailPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AuthRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <div className="relative h-full w-full" data-theme="synthwave">
      <div
        className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
      [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#3B82F680_100%)]"
      />
      <Routes>
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AuthRoute>
              <Register />
            </AuthRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <Createpage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/note/:id"
          element={
            <ProtectedRoute>
              <NoteDetailPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
