import React, { Component } from "react";
import { Link } from "react-router-dom";
import "_asset/css/style.css";

class Gnb extends Component {
  render() {
    return (
      <div className="gnb_area">
        <div className="gnb">
          <Link to="/">
            <h1 className="logo" title="HANDY GMS">
              HANDY GMS
            </h1>
          </Link>

          <ul className="gnb_menu">
            <li className="">
              <Link to="/service-intro" className="menu" title="service price">
                <span>서비스 소개</span>
              </Link>
            </li>
            <li className="">
              <Link to="/service-intro" className="menu" title="service price">
                <span>서비스 가격</span>
              </Link>
            </li>
            <li className="" title="media">
              <Link to="/service-intro" className="menu" title="service price">
                <span>홍보 센터</span>
              </Link>
            </li>
            <li className="" title="qna">
              <Link to="/service-intro" className="menu" title="service price">
                <span>고객 센터</span>
              </Link>
            </li>
            <li className="apply" title="apply">
              <Link to="/service-intro" className="menu" title="service price">
                <span>서비스 신청</span>
              </Link>
            </li>
            <li className="support" title="apply">
              <Link to="/service-intro" className="menu" title="service price">
                <span>문의 하기</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Gnb;
