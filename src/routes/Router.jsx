import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/routes/ProtectedRoute";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/overview",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
