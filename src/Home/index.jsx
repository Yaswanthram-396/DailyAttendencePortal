import Navbar from "../Navbar";
import "./index.css";
import React from "react";
import SidePanel from "../Sidebar";

function Home() {
  return (
    <div className="home" style={{ display: "flex" }}>
      <SidePanel />

      <Navbar />
    </div>
  );
}
// this is my first commit

export default Home;
