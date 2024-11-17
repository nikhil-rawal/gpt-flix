import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard";
import appStore from "./utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";

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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <Provider store={appStore}>
      <RouterProvider router={myRouter} />;
    </Provider>
  );
}

export default App;
