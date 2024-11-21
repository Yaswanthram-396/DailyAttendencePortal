import "./index.css";
import { FaDashboard, FaGamepad, FaFire } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import ConfigurationContext from "../globalContext";
import Navbar from "../Navbar";

<script
  src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
  type="module"
></script>;

export function Panel({ props, setting }) {
  const { handlePage, pagein } = useContext(ConfigurationContext);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location;
    const num = currentPath.pathname.split("/").pop();
  }, []);
  const Num = (word) => {
    setting({ display: "none" });
  };

  return (
    <div className="sidePanel" style={props}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ textAlign: "end", paddingRight: "5%", paddingTop: "3%" }}>
          <FaTimes
            className="closeIcon"
            onClick={() => setting({ display: "none" })}
          />
        </div>
        <div className="entireside">
          <div className="sidePanelOptionsContainer">
            <Link to="/DailyAttandence/Dashboard">
              <div
                className="sidePanelOptions"
                onClick={() => Num("Dashboard")}
              >
                <h4>Dashboard</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export function HiGif() {
  return (
    <div className="iframe-con">
      <dotlottie-player
        src="https://lottie.host/637eb98c-5554-4fea-95cc-b87dc7ee94e6/i7yPvsEMfB.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        autoplay
      ></dotlottie-player>
    </div>
  );
}

function SidePanel({ Num }) {
  const { handlePage, pagein } = useContext(ConfigurationContext);

  const location = useLocation();

  useEffect(() => {
    const currentPath = location;
    const num = currentPath.pathname.split("/").pop();
    handlePage(num);
  }, []);

  return (
    <>
      <div className="contentWithPanel">
        <div className="sidePanel">
          <div className="sidePanelOptionsContainer">
            <Link to="/DailyAttandence/Dashboard">
              <div className="hidiv" onClick={() => handlePage("Dashboard")}>
                <div className="userName">
                  <div className="iframe-container">
                    <dotlottie-player
                      src="https://lottie.host/637eb98c-5554-4fea-95cc-b87dc7ee94e6/i7yPvsEMfB.json"
                      background="transparent"
                      speed="1"
                      style={{ width: "300px", height: "300px" }}
                      autoplay
                    ></dotlottie-player>
                  </div>
                  <div className="userNameContainer">
                    <h2 style={{ color: "#1d9bf0" }}>Nitesh Sabbavarapu</h2>
                  </div>
                </div>
              </div>
              <div
                className="sidePanelOptions"
                style={{
                  backgroundColor: pagein === "Dashboard" ? "#1d9bf0" : null,

                  color: pagein === "Dashboard" ? "#fff" : "#2c5b8c",
                }}
                onClick={() => handlePage("Dashboard")}
              >
                <img
                  src={
                    pagein === "Dashboard"
                      ? "../images/Dashboard-white.svg"
                      : "../images/Dashboard-blue.svg"
                  }
                  alt="Dashboard"
                />
                <h4>Dashboard</h4>
              </div>
            </Link>
            <Link to="/DailyAttandence/AttendenceReport">
              <div
                className="sidePanelOptions"
                style={{
                  backgroundColor:
                    pagein === "AttendenceReport" ? "#1d9bf0" : null,
                  color: pagein === "AttendenceReport" ? "#fff" : "#2c5b8c",
                }}
                onClick={() => handlePage("AttendenceReport")}
              >
                <img
                  src={
                    pagein === "AttendenceReport"
                      ? "../images/Attendence-white.svg"
                      : "../images/Attendence-Blue.svg"
                  }
                  alt="Dashboard"
                />
                <h4>Attendence Report</h4>
              </div>
            </Link>
            <Link to="/DailyAttandence/myAccount">
              <div
                className="sidePanelOptions"
                style={{
                  backgroundColor: pagein === "myAccount" ? "#1d9bf0" : null,
                  color: pagein === "myAccount" ? "#fff" : "#2c5b8c",
                }}
                onClick={() => handlePage("myAccount")}
              >
                <img
                  src={
                    pagein === "myAccount"
                      ? "../images/Account-white.svg"
                      : "../images/Account-blue.svg"
                  }
                  alt="Dashboard"
                />
                <h4>My Account</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          height: "100vh",
          backgroundColor: "#f3f8fb",
        }}
      >
        <Navbar />
        {Num}
      </div>
    </>
  );
}

export default SidePanel;
