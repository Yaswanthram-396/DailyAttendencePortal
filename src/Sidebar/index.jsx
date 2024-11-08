import "./index.css";
import { FaHome, FaGamepad, FaFire } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

<script
  src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
  type="module"
></script>;

export function Panel({ props, setting }) {
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
            <Link to="/NxtWatch/Home">
              <div className="sidePanelOptions" onClick={() => Num("Home")}>
                <h4>Home</h4>
              </div>
            </Link>
          </div>
          <div className="sidePanelFooter">
            <h2>CONTACT US</h2>
            <div className="iconsContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                className="icon"
                alt="facebook logo"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
                className="icon"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                className="icon"
              />
            </div>
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidePanel({ Num }) {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location;
    const num = currentPath.pathname.split("/").pop();
  }, []);

  return (
    <div className="contentWithPanel">
      <div className="sidePanel">
        <div className="sidePanelOptionsContainer">
          <Link to="/NxtWatch/Home">
            <div className="hidiv">
              <div className="userName">
                <div className="iframe-container">
                  <dotlottie-player
                    src="https://lottie.host/637eb98c-5554-4fea-95cc-b87dc7ee94e6/i7yPvsEMfB.json"
                    background="transparent"
                    speed="1"
                    style={{ width: "300px", height: "300px" }}
                    loop
                    autoplay
                  ></dotlottie-player>
                </div>
                <div>
                  <h2>Nitesh Sabbavarapu</h2>
                </div>
              </div>
            </div>
            <div className="sidePanelOptions">
              <h4>Home</h4>
            </div>
          </Link>
          <Link to="/NxtWatch/Trending">
            <div className="sidePanelOptions">
              <h4>Trending</h4>
            </div>
          </Link>
          <Link to="/NxtWatch/Gaming">
            <div className="sidePanelOptions">
              <h4>Gaming</h4>
            </div>
          </Link>
          <Link to="/NxtWatch/Saved">
            <div className="sidePanelOptions">
              <h4>Saved videos</h4>
            </div>
          </Link>
        </div>
        <div className="sidePanelFooter">
          <h2>CONTACT US</h2>
          <div className="iconsContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              className="icon"
              alt="facebook logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
              alt="twitter logo"
              className="icon"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
              className="icon"
            />
          </div>
          <p>Enjoy! Now to see your channels and recommendations!</p>
        </div>
      </div>
      {Num}
    </div>
  );
}

export default SidePanel;
