import React, { Component } from "react";
import Header from "_components/common/Header";
import Footer from "_components/common/Footer";
import HomeBody from "_components/home/HomeBody";

import "_asset/css/style.css";

class HomePage extends Component {
  render() {
    return (
      <div className="wrapper main">
        <Header />
        <HomeBody />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
