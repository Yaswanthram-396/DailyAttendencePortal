import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./Login";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/DailyAttandence/Home" element={<Home />} />
    </Routes>
  );
}

export default App;
