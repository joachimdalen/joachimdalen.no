import * as React from "react";

interface ITypableContainer {
  text: string;
  period: number;
  stack: string[];
}

interface ITypeableState {
  loopNumber: number;
  isDeleting: boolean;
  currentText: string;
}

export default class TypableContainer extends React.Component<
  ITypableContainer,
  ITypeableState
> {
  constructor(props: ITypableContainer) {
    super(props);
    this.state = {
      currentText: "",
      isDeleting: false,
      loopNumber: 0
    };
  }
  public componentDidMount() {
    this.tick();
  }
  public render() {
    const { text } = this.props;

    return (
      <h2>
        {text}
        <span className="text-rotate">
          <span className="wrap">{this.state.currentText}</span>
        </span>
      </h2>
    );
  }
  private tick() {
    const { loopNumber, currentText, isDeleting } = this.state;
    const { stack } = this.props;
    const num: number = loopNumber % stack.length;
    const textToInsert = stack[num];
    if (isDeleting) {
      this.setState({
        currentText: textToInsert.substring(0, currentText.length - 1)
      });
    } else {
      this.setState({
        currentText: textToInsert.substring(0, currentText.length + 1)
      });
    }
    const thisObj = this;
    let delta = 200 - Math.random() * 100;
    if (isDeleting) {
      delta /= 2;
    }
    if (!isDeleting && currentText === textToInsert) {
      delta = this.props.period;
      this.setState({ isDeleting: true });
    } else if (isDeleting && currentText === "") {
      this.setState({
        isDeleting: false,
        loopNumber: loopNumber + 1
      });
      delta = 500;
    }
    // tslint:disable only-arrow-functions
    setTimeout(function() {
      thisObj.tick();
    }, delta);
  }
}
