import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the main route with nested routes */}
        <Route path="/" element={<Home />}>
          {/* Default route (index) renders SignIn component */}
          <Route index element={<SignIn />} />
          {/* Route for SignIn page */}
          <Route path="signin" element={<SignIn />} />
          {/* Route for SignUp page */}
          <Route path="signup" element={<SignUp />} />
        </Route>
        {/* Route for Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
