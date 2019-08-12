import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./AppMenu.scss";

class AppMenu extends React.Component {
  public render(): JSX.Element {
    return this.renderNavBar();
  }

  private renderNavBar(): JSX.Element {
    return (
      <Menu
        className="AppMenu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item className="AppMenu__Item--right AppMenu__Item--callToAction">
          <Link to="/resume">Resume</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppMenu;
