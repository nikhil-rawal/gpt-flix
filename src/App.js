import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard";
import appStore from "./utils/appStore";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={myRouter} />;
    </Provider>
  );
}

export default App;
