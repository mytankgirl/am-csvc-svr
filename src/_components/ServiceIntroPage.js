import React, { Component } from "react";
import Header from "_components/common/Header";
import ServiceIntroBody from "_components/intro/ServiceIntroBody";
import Footer from "_components/common/Footer";
import "_asset/css/style.css";

class ServiceIntroPage extends Component {
  render() {
    return (
      <div className="wrapper main">
        <Header />
        <ServiceIntroBody />
        <Footer />
      </div>
    );
  }
}

export default ServiceIntroPage;
