import React, { Component } from "react";
// import Tabbar from "./component/tabbar/main";
import Routes from "./route";
import "./css/main.less";
export default class main extends Component {
  render() {
    console.log(Routes, "Routes");
    return (
      <div>
        <Routes />
      </div>
    );
  }
}
