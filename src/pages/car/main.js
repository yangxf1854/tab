import React, { Component } from "react";
import Tabbar from "../../component/tabbar/main";

@Tabbar
class main extends Component {
  render() {
    return (
      <div>
        <div className="content">car</div>
        <Tabbar />
      </div>
    );
  }
}
export default main;
