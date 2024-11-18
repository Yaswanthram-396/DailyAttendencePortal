import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./Login";
import Dashboard from "./Home";
import { useState } from "react";
import ConfigurationContext from "./globalContext";
import AccountDetails from "./Account";
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
          element={<Dashboard Num={<LoginPage />} />}
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

// import "./App.css";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import LoginPage from "./Login";
// import Dashboard from "./Dashboard";
// import { useState } from "react";
// import ConfigurationContext from "./globalContext";

// function App() {
//   const [pagein, setPage] = useState("Dashboard");
//   const handlePage = (newItem) => {
//     localStorage.setItem("pagein", newItem);
//     setPage(newItem);
//   };
//   return (
//     <div className="profile-card">
//       <div className="profile-header">
//         <div className="profile-info">
//           <div className="profile-image-container"></div>
//           <div className="profile-name">
//             <h2>Nitesh Sabbavarapu</h2>
//             <p>Student</p>
//           </div>
//         </div>
//       </div>
//       <div className="account-details">
//         <h3 style={{ borderBottom: "2px solid", width: "100%" }}>
//           Account Details
//         </h3>
//         <div className="details-row">
//           <div className="details-item">
//             <span className="details-label">Student ID</span>
//             <span className="details-value">2023456026</span>
//           </div>
//           <div className="details-item">
//             <span className="details-label">Phone Number</span>
//             <span className="details-value">9595668649</span>
//           </div>
//         </div>
//         <div className="details-row">
//           <div className="details-item">
//             <span className="details-label">Full Name</span>
//             <span className="details-value">Nitesh</span>
//           </div>
//           <div className="details-item">
//             <span className="details-label">Gender</span>
//             <span className="details-value">Male</span>
//           </div>
//         </div>
//         <div className="details-row">
//           <div className="details-item">
//             <span className="details-label">Date of Birth</span>
//             <span className="details-value">10/06/2006</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
