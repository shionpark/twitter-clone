import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Login from "./routes/login";
import CreateAccount from "./routes/createAccount";
import Home from "./routes/home";
import Profile from "./routes/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "create-account",
    element: <CreateAccount />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
