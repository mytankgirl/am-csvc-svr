import React, { Component } from "react";

import Header from "_components/common/Header";
import ServiceIntroBody from "_components/ServiceIntroBody";

import "asset/css/style.css";

class ServiceIntroPage extends Component {
  render() {
    return (
      <div className="wrapper main">
        <Header />
        <ServiceIntroBody />
      </div>
    );
  }
}

export default ServiceIntroPage;
