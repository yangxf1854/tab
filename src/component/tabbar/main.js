import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.less";
import "../../static/iconfont.css";

const tabBarArr = [
  {
    icon: "icon-shouye",
    title: "首页",
    link: "/home"
  },
  {
    icon: "icon-fenlei",
    title: "分类",
    link: "/classify"
  },
  {
    icon: "icon-daohanggouwuche",
    title: "购物车",
    link: "/car"
  },
  {
    icon: "icon-yonghu",
    title: "我的",
    link: "/user"
  }
];
const Tabbar = WrappedComponent =>
  class main extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      const url = window.location.href; // 获取当前地址
      return (
        <div className="content">
          <WrappedComponent /> {/*内容*/}
          <div className="tab-bar">
            {tabBarArr.map((value, i) => (
              <Link
                to={value.link}
                className={
                  "tab-item" + (url.indexOf(value.link) !== -1 ? " active" : "")
                }
              >
                <div className={`iconfont ${value.icon}`} />
                <div>{value.title}</div>
              </Link>
            ))}
          </div>
        </div>
      );
    }
  };
export default Tabbar;
