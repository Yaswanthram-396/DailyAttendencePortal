import "./index.css";
// import { FaMoon, FaSun } from "react-icons/fa";
// import ConfigurationContext from "../globalContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Panel } from "../Sidebar";
import Cookies from "js-cookie";
import { FaSignOutAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

import React from "react";
// import { FaSignOutAlt } from "react-icons/fa"; // Logout icon from react-icons
// import "./DropdownMenu.css"; // CSS file for styling

export const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/");
  };
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container-navbar">
      {/* Profile Section */}
      <div className="profile-section" onClick={toggleDropdown}>
        {/* <img
          src="https://via.placeholder.com/40" // Replace with actual profile picture URL
          alt="Profile"
          className="profile-pic"
        /> */}
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "blue",
          }}
        ></div>
        <span className="profile-name-navbar">Nitesh Sabbavarapu</span>
        <span className="dropdown-arrow">▼</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <div className="logout-option" onClick={() => handleLogout(true)}>
            <FaSignOutAlt className="logout-icon" />
            <span className="logout-text">Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  // const [showpop, setpop] = useState(false);
  // const navigate = useNavigate();

  // const [stile, setStile] = useState({ display: "none" });

  // const handleProfile = () => {
  //   setStile({
  //     display: "block",
  //     position: "absolute",
  //     zIndex: 2,
  //     top: "0",
  //     left: "0",
  //   });
  // };
  return (
    <>
      {/* {showpop ? (
        <div className="entirePop">
          <div
            className="poper"
            style={{
              position: "fixed",
              zIndex: "999",
              height: "200px",
              width: "32%",
              top: "40%",
              left: "36%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            <h3>Are you sure you want to logout?</h3>
            <div className="pop-btn">
              <button className="Cancel-btn" onClick={() => setpop(false)}>
                Cancel
              </button>
              <button className="Confirm-btn" onClick={handleRemove}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : null} */}
      <nav>
        <div className="navbarList">
          {/* <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="logo"
              className="poffile"
            />
            <FaBars
              className="logoutSVG"
              style={{ fontSize: "24px" }}
              onClick={handleProfile}
            />
          </li>
          <button className="logoutBtn" onClick={() => setpop(true)}>
            Log out
          </button>
          <FaSignOutAlt
            className="logoutSVG"
            style={{ fontSize: "24px" }}
            title="logout"
            onClick={() => setpop(true)}
          /> */}
          <ProfileDropdown />
        </div>
      </nav>
    </>
  );
};
export default Navbar;
