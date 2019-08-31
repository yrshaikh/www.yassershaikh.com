import React from "react";
import "./TitleAndSubTitle.scss";

interface IProps {
  isMobile: boolean;
}
class TitleAndSubTitle extends React.Component<IProps, {}> {
  public constructor(props: IProps) {
    super(props);
  }
  // YASSƎЯ SHAIꓘH
  public render(): JSX.Element {
    const isMobile: boolean = this.props.isMobile;
    return (
      <div>
        <div className={this.constructClassName("Title", isMobile)}>
          YASSER <br />
          SHAIKH
        </div>
        <div className={this.constructClassName("SubTitle", isMobile)}>
          I design & build things on the web.
        </div>
      </div>
    );
  }
  private constructClassName(element: string, isMobile: boolean): string {
    if (!isMobile) {
      return `TitleAndSubTitle__${element}`;
    }
    return `TitleAndSubTitle__${element} TitleAndSubTitle__${element}--mobile`;
  }
}

export default TitleAndSubTitle;
