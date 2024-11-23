import "./index.css";

import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import ConfigurationContext from "../globalContext";
import Navbar from "../Navbar";

<script
  src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
  type="module"
></script>;

export function Panel({ props, setting }) {
  // const { handlePage, pagein } = useContext(ConfigurationContext);
  // const location = useLocation();

  // useEffect(() => {
  //   const currentPath = location;
  //   const num = currentPath.pathname.split("/").pop();
  // }, []);
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
  const { handlePage } = useContext(ConfigurationContext);
  const pagein = localStorage.getItem("pagein");
  const progressFrameRef = useRef(null);

  useEffect(() => {
    // Update the frame position based on the active container
    const updateFramePosition = () => {
      const activeElement = document.getElementById(
        pagein === "Dashboard"
          ? "dashboard"
          : pagein === "AttendenceReport"
          ? "attendance-report"
          : "myAccount"
      );

      if (activeElement && progressFrameRef.current) {
        const { left, width } = activeElement.getBoundingClientRect();
        if (pagein === "Dashboard") {
          if (window.innerWidth < 600) {
            progressFrameRef.current.style.left = `6%`;
          } else {
            progressFrameRef.current.style.left = `11%`;
          }
        }
        // progressFrameRef.current.style.left = `${left}px`;
        else if (pagein === "AttendenceReport") {
          if (window.innerWidth < 600) {
            progressFrameRef.current.style.left = `42%`;
          } else {
            progressFrameRef.current.style.left = `46%`;
          }
        } else {
          if (window.innerWidth < 600) {
            progressFrameRef.current.style.left = `80%`;
          } else {
            progressFrameRef.current.style.left = `81.5%`;
          }
        }
      }
    };

    updateFramePosition();
    window.addEventListener("resize", updateFramePosition); // Recalculate on resize

    return () => window.removeEventListener("resize", updateFramePosition);
  }, [pagein]);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location;
    const num = currentPath.pathname.split("/").pop();
    handlePage(num);
  }, []);
  const containerHeight = `${window.innerHeight}px`;

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
                      ? "../images/final Attendence white.svg"
                      : "../images/final Attendence not active lg.svg"
                  }
                  alt="Dashboard"
                  style={{ width: "25px", height: "25px" }}
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
      <div className="TotalContainer" style={{ height: containerHeight }}>
        <Navbar />
        {Num}
        <div className="mobileSidePanelBar">
          <div className="sidepanelElements">
            {/* Progress Frame */}
            <div
              ref={progressFrameRef}
              className="progress-frame"
              style={{ position: "absolute", transition: "all 0.3s ease" }}
            ></div>

            {/* Dashboard */}
            <Link to="/DailyAttandence/Dashboard">
              <div
                id="dashboard"
                className="Dashboard-container"
                style={{ width: "90%" }}
                onClick={() => handlePage("Dashboard")}
              >
                <img
                  src={
                    pagein === "Dashboard"
                      ? "../images/Dashboard-white.svg"
                      : "../images/dashboard notactive.svg"
                  }
                  alt="Dashboard"
                />
                <h6
                  style={{
                    color: pagein === "Dashboard" ? "#fff" : "#AAD9F9",
                    margin: "8px 0px",
                    marginTop: " 12px",
                  }}
                >
                  Dashboard
                </h6>
              </div>
            </Link>

            {/* Attendance Report */}
            <Link to="/DailyAttandence/AttendenceReport">
              <div
                id="attendance-report"
                className="Dashboard-container"
                style={{ width: "90%" }}
                onClick={() => handlePage("AttendenceReport")}
              >
                <img
                  src={
                    pagein === "AttendenceReport"
                      ? "../images/final Attendence white.svg"
                      : "../images/final Attendence not active.svg"
                  }
                  alt="Attendance Report"
                />
                <h6
                  style={{
                    color: pagein === "AttendenceReport" ? "#fff" : "#AAD9F9",
                    margin: "8px 0px",
                  }}
                >
                  Attendance Report
                </h6>
              </div>
            </Link>

            {/* My Account */}
            <Link to="/DailyAttandence/myAccount">
              <div
                id="myAccount"
                className="Dashboard-container"
                style={{ width: "90%" }}
                onClick={() => handlePage("myAccount")}
              >
                <img
                  src={
                    pagein === "myAccount"
                      ? "../images/Account-white.svg"
                      : "../images/Profile notactive.svg"
                  }
                  alt="My Account"
                />
                <h6
                  style={{
                    color: pagein === "myAccount" ? "#fff" : "#AAD9F9",
                    margin: "8px 0px",
                  }}
                >
                  My Account
                </h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidePanel;
