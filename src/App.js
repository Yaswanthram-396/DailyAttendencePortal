import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./Login";
import Dashboard from "./Home";
import { useState } from "react";
import ConfigurationContext from "./globalContext";
import AccountDetails from "./Account";
import DashboardPunchin from "./DashboardPunchin";

function App() {
  const [pagein, setPage] = useState("Dashboard");
  const handlePage = (newItem) => {
    localStorage.setItem("pagein", newItem);
    setPage(newItem);
  };
  return (
    <ConfigurationContext.Provider
      value={{
        pagein,
        handlePage,
      }}
    >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/DailyAttandence/Dashboard"
          element={<Dashboard Num={<DashboardPunchin />} />}
        />
        <Route
          path="/DailyAttandence/AttendenceReport"
          element={<Dashboard Num={<LoginPage />} />}
        />
        <Route
          path="/DailyAttandence/myAccount"
          element={<Dashboard Num={<AccountDetails />} />}
        />
      </Routes>
    </ConfigurationContext.Provider>
  );
}
export default App;
