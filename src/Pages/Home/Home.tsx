import { Col, Row } from "antd";
import React from "react";
import ResumePage from "../Resume/ResumePage";
import "./Home.scss";

class Home extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="Home">
        <Row>
          <Col span={6} xs={24}>
            <div className="Home__Shouts">
              <div className="Home__Shout1">Hi there! My name is</div>
              <img
                className="Home__Profile"
                /* tslint:disable-next-line:max-line-length */
                src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/68305015_10162059781405721_7997220171620024320_n.jpg?_nc_cat=101&_nc_oc=AQljcMyh1PxcTFAlU4wjyv8gP_wllB6-soqYqqQzkUMSMhJAYDSA3KOWwmDYEEQgMrA&_nc_ht=scontent.fbkk12-1.fna&oh=b1bd8bd69294c50b9f781469d5a5be85&oe=5DDA4880"
              />
              <div className="Home__Shout2">
                Yasser
                <br />
                Shaikh
              </div>
              <div className="Home__Shout3">
                Passionate full stack engineer with over 9 years of work
                experience in designing, developing and delivering scaleable
                projects.
              </div>
            </div>
          </Col>
          <Col span={18} xs={0}>
            <ResumePage />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
