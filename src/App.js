import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   { index: true, element: <SignIn /> },
    //   { path: "/signin", element: <SignIn /> },
    //   { path: "/signup", element: <SignUp /> },
    // ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
