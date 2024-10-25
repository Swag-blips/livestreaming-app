import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/profile/Profile";
import Schedule from "./pages/schedule/Schedule";
import GoLive from "./pages/live/GoLive";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="golive" element={<GoLive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
