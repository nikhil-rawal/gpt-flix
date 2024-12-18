// import Home from "./pages/Home";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useNavigate,
// } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import Dashboard from "./pages/Dashboard";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./utils/firebase";
// import { useEffect } from "react";
// import { addUser, removeUser } from "./utils/userSlice";

// const myRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
// ]);

// function App() {
//   const dispatch = useDispatch();
//   const navigateTo = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, displayName, email, photoURL } = user;
//         dispatch(
//           addUser({
//             uid: uid,
//             displayName: displayName,
//             email: email,
//             photoURL: photoURL,
//           })
//         );
//         navigateTo("/dashboard");
//       } else {
//         dispatch(removeUser());
//         navigateTo("/");
//       }
//     });

//     return () => unsubscribe();
//   }, [dispatch, navigateTo]);

//   return <RouterProvider router={myRouter} />;
// }

// export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

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
  return <RouterProvider router={myRouter} />;
}

export default App;
