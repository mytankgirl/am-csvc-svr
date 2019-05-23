import React, { Component } from "react";
import "_asset/css/style.css";
// import main_v01 from "asset/img/main_v01.png";

class ServiceIntroduction extends Component {
  render() {
    return (
      <div className="body sub_page">
        <div className="contents_area">
          <div className="visual_area">
            <div className="visual">
              <div className="text_box">
                <h3>서비스 소개</h3>
                <div>
                  <span>HOME > 서비스 소개</span>
                </div>
              </div>
            </div>
          </div>

          <div className="content_wrap  main_decrp">
            <div className="title_area mg_tp_60">
              <h2 className="title">혁신적인 인증통합관리 서비스</h2>
              <span>
                효과적인 경영시스템 인증 도입 및 운영을 위한 귀사의 경영시스템이
              </span>
              <br />
              <em>HANDY GMS&#40;H-GMS&#41;</em>
              <span>여야 하는</span>
              <em>4가지 이유</em>
            </div>

            <div className="content">
              <ul className="ui_multi_box col_4">
                <li className="cont_box">
                  <div className="box_wrap">
                    <h4 className="title">Easy</h4>
                    <div className="description">
                      <div className="dscrpt_img easy" />
                      <div className="dscrpt_txt">
                        편리한 <br />
                        시스템 관리
                      </div>
                    </div>
                  </div>
                </li>

                <li className="cont_box">
                  <div className="box_wrap">
                    <h4 className="title">Simple</h4>
                    <div className="description">
                      <div className="dscrpt_img simple" />
                      <div className="dscrpt_txt">
                        간편한 <br />
                        인증 도입 및 운영
                      </div>
                    </div>
                  </div>
                </li>

                <li className="cont_box">
                  <div className="box_wrap">
                    <h4 className="title">Intuitive</h4>
                    <div className="description">
                      <div className="dscrpt_img intuitive" />s
                      <div className="dscrpt_txt">
                        직관적인 <br />
                        사용법 및 메뉴
                      </div>
                    </div>
                  </div>
                </li>

                <li className="cont_box">
                  <div className="box_wrap">
                    <h4 className="title">Professional</h4>
                    <div className="description">
                      <div className="dscrpt_img professional" />
                      <div className="dscrpt_txt">
                        전문적인 <br />
                        도입 및 운영 도구
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceIntroduction;
