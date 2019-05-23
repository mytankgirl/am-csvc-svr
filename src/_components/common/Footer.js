import React, { Component } from "react";
import { Link } from "react-router-dom";
import "_asset/css/style.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_inform">
          <div className="logo" />
          <div className="terms_area">
            <ul className="site_inform">
              <li className="item">
                <Link target="_blank">서비스 소개</Link>
              </li>
              <li className="item">
                <Link target="_blank">회사 소개</Link>
              </li>
              <li className="item">
                <Link target="_blank">이용약관</Link>
              </li>
              <li className="item">
                <Link target="_blank">개인정보취급방침</Link>
              </li>
            </ul>
            <div className="corp_inform">
              <div>
                <span>&#40;주&#41;GH Soft 대표이사 이진수</span>
                <span className="contact">구입 상담 문의 : 080-1234-5678</span>
                <span className="contact">고객센터 1688-4121</span>
              </div>
              <div>
                <span>사업자 등록번호 : 131-81-12345</span>
                <span>통신판매업신고 : 제2002-경기 성남-0049호</span>
              </div>
              <div>
                <span>
                  463-400 경기도 성남시 분당구 대왕판교로 644번길 49 다산타워
                  5층
                </span>
              </div>
              <div>
                <span>
                  Copyright&copy; 2017 GH Soft Inc. all rights reserved.
                </span>
              </div>
            </div>
          </div>
          <div className="related_info">
            <ul className="social_network">
              <li className="rss">
                <Link target="_blank" />/{" "}
              </li>
              <li className="facebook">
                <Link target="_blank" />
              </li>
              <li className="twitter">
                <Link target="_blank" />
              </li>
              <li className="youtube">
                <Link target="_blank" />
              </li>
            </ul>
            <div className="family_site">
              <Link target="_blank">
                <span>Family Site</span>
              </Link>

              <ul className="select_list">
                <li>
                  <Link target="_blank">DASAN NETWORKS</Link>
                </li>
                <li>
                  <Link target="_blank">HANDYSOFT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
