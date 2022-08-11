import { Component } from "react";
class Lifecyclecomp2 extends Component {
  constructor(props) {
    super(props);
    console.log("inside Lifecyclecomp2 constructor");
    this.state = {
      counter01: 1,
      counter02: 1,
    };
  }
  componentDidMount() {
    console.log("inside  Lifecyclecomp2 componentDidMount ");
  }
  render() {
    console.log("inside Lifecyclecomp2 render");
    return (
      <>
        <div>
          {this.state.counter01}
          <button
            onClick={() =>
              this.setState({ counter01: this.state.counter01 + 1 })
            }
          >
            +
          </button>
          {this.state.counter02}
          <button
            onClick={() =>
              this.setState({ counter02: this.state.counter02 + 1 })
            }
          >
            +
          </button>
        </div>
      </>
    );
  }
}
export default Lifecyclecomp2;
