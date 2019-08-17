import React from "react";
import "./TitleAndSubTitle.scss";

class TitleAndSubTitle extends React.Component {
  // YASSƎЯ SHAIꓘH
  public render(): JSX.Element {
    return (
      <div>
        <div className="TitleAndSubTitle__Title">
          <span className="glitch">YASSER SHAIKH</span>
        </div>
        <div className="TitleAndSubTitle__SubTitle">
          I design & build things on the web.
        </div>
      </div>
    );
  }
}

export default TitleAndSubTitle;
