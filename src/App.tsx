import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Login from "./routes/login";
import CreateAccount from "./routes/createAccount";
import Home from "./routes/home";
import Profile from "./routes/profile";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";

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
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady(); // wait for firebase
    setLoading(false);
  };
  useEffect(() => {
    init();
  });
  return (
    <>{isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}</>
  );
  // ;
}

export default App;
