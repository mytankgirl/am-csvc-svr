import React, { Component } from "react";
import "_asset/css/style.css";
import main_v01 from "_asset/img/main_v01.png";

class Home extends Component {
  render() {
    return (
      <div className="body">
        <div className="contents_area">
          <div className="visual_area main">
            <div
              id="myCarousel"
              className="visual carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to="1" />
                <li data-target="#myCarousel" data-slide-to="2" />
              </ol>

              <div className="carousel-inner">
                <div className="item active">
                  <img src={main_v01} alt="main" />
                </div>
              </div>

              <a
                className="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
