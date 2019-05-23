import React, { Component } from "react";
import { Link } from "react-router-dom";
import "_asset/css/style.css";
import Gnb from "_components/common/Gnb";

class Header extends Component {
  render() {
    return (
      <div className="header" id="top">
        <div className="setting_area">
          <div className="login_group">
            <span className="mypage">
              <Link target="_blank">My GMS</Link>
            </span>
            <span className="login">
              <Link to="/login">Login</Link>
            </span>
          </div>
        </div>

        <Gnb />
      </div>
    );
  }
}

export default Header;
