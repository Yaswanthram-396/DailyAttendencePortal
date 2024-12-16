import "./index.css";
import Cookies from "js-cookie";
import React from "react";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    showPass: false,
    error: false,
    showIntroCard: true,
  };

  componentDidMount() {
    this.introTimer = setTimeout(
      () => this.setState({ showIntroCard: false }),
      2500
    );
  }

  componentWillUnmount() {
    if (this.introTimer) clearTimeout(this.introTimer);
  }

  handleChange = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  handleShowPass = () => {
    this.setState((prevState) => ({ showPass: !prevState.showPass }));
  };

  handleSubmit = async () => {
    const { username, password } = this.state;
    try {
      const response = await fetch("https://apis.ccbp.in/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        return this.setState({ error: true });
      }

      const { jwt_token } = await response.json();
      Cookies.set("jwt_token", jwt_token, { expires: 0.1 });
      window.location.href = "/DailyAttandence/Dashboard";
    } catch (error) {
      this.setState({ error: true });
    }
  };

  renderLoginForm() {
    const { username, password, showPass, error } = this.state;
    return (
      <div className="nxwLogin" style={{ backgroundColor: "#e3f3fd" }}>
        <div className="loginField">
          <div className="logoImageCon">
            <h2>Login</h2>
            <h3>Welcome Back</h3>
            <p>Please enter your Attendance credentials.</p>
          </div>
          <div className="loginInputFildsBtn">
            <div className="inputsWithbtn">
              <div className="inputs">
                <div className="usernameCon">
                  <p className="usernameHeading">USERNAME</p>
                  <input
                    onChange={this.handleChange("username")}
                    placeholder="Username"
                    className="userInput"
                    value={username}
                  />
                </div>
                <div className="passwordCon">
                  <p className="usernameHeading">PASSWORD</p>
                  <input
                    onChange={this.handleChange("password")}
                    placeholder="Password"
                    className="userInput"
                    type={showPass ? "text" : "password"}
                    value={password}
                  />
                </div>
              </div>
              <form>
                <input type="checkbox" onClick={this.handleShowPass} />
                <label>Show password</label>
              </form>
            </div>
            <div className="btnCon">
              <button
                type="button"
                className="loginButton"
                onClick={this.handleSubmit}
                style={{ cursor: "pointer" }}
              >
                Login
              </button>
              <h5 style={{ textAlign: "center" }}>
                Don't have an account please{" "}
                <span style={{ color: "blue" }}> Register HERE</span>
              </h5>
              {error && (
                <p className="error">*Username or Password didn't match</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderIntroCard() {
    return (
      <div
        className="nxwLogin background"
        style={{
          backgroundImage: `url(/images/designLogin.svg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="loginField loginField-2"
          style={{
            backgroundColor: "#1989D4",
            border: "1px solid #104D76",
            justifyContent: "space-around",
          }}
        >
          <div className="input-text-login">
            <img src="/images/NIATlogo.svg" alt="logo" className="logoImage" />
          </div>
          <div className="AttendenceText">
            <h2>
              "Attendance is the first step to success, be present to win."
            </h2>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { showIntroCard } = this.state;
    return window.innerWidth > 600 ? (
      <div className="fullContainer">
        {this.renderLoginForm()}
        {this.renderIntroCard()}
      </div>
    ) : showIntroCard ? (
      this.renderIntroCard()
    ) : (
      this.renderLoginForm()
    );
  }
}

export default LoginPage;
