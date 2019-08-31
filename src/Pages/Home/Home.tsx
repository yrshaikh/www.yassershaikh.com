import {Col, Icon, Menu, Row} from "antd";
import React from "react";
import ResumePage from "../Resume/ResumePage";
import TitleAndSubTitle from "./Components/TitleAndSubTitle/TitleAndSubTitle";
import "./Home.scss";

interface IProps {
  isMobile: boolean;
}
class Home extends React.Component<IProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="Home">
        <Menu mode="horizontal" theme={"dark"}>
          <Menu.Item key="home">
            <Icon type="home" />
            Home
          </Menu.Item>
          <Menu.Item key="medium">
            <a href="https://medium.com/yasser-shaikh" target="_blank" rel="noopener noreferrer">
              <Icon type="book" />
              Blog
            </a>
          </Menu.Item>
        </Menu>
        <Row>
          <Col className="Home__Welcome" span={24}>
            <TitleAndSubTitle isMobile={this.props.isMobile} />
          </Col>
          {/*<Col span={24}>*/}
          {/*  <ResumePage />*/}
          {/*</Col>*/}
        </Row>
      </div>
    );
  }
}

export default Home;
