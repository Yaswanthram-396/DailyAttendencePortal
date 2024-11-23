// import Navbar from "../Navbar";
import "./index.css";
import React from "react";
import SidePanel from "../Sidebar";

function Dashboard({ Num }) {
  return (
    <div className="Dashboard" style={{ display: "flex" }}>
      <SidePanel Num={Num} />
    </div>
  );
}
// this is my first commit

export default Dashboard;
