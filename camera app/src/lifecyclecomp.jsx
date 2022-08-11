import { Component } from "react";
import { Container } from "reactstrap";
import Lifecyclecomp2 from "./lifecyclecomp2";
class Lifecycle extends Component {
  //constructor is the mounting phase of the lifecycle of the function
  //it will executed only once when the class component started executing
  constructor(props) {
    super(props);
    console.log("1: inside constructor");
    this.state = {
      counter1: 1,
      counter2: 1,
    };
  }
  //   componentDidMount is the unmounting phase of lifecycle of the class function
  //   it will execute on once when the component finished execution
  componentDidMount() {
    console.log("3: inside componentDidMount ");
  }
  //render is the update phase of the lifecycle of the function
  //it will executed every time when the component will updated(rerendered)
  render() {
    console.log("2:inside render");

    return (
      <>
        <Container>
          <div>
            <span>{this.state.counter1} </span>
            {/* button for increament */}
            <button
              onClick={() => {
                this.setState({ counter1: this.state.counter1 + 1 });
              }}
            >
              +
            </button>
            {/* button for decreament */}
            <button
              onClick={() => {
                this.setState({ counter1: this.state.counter1 - 1 });
              }}
            >
              -
            </button>
          </div>
          <div>
            <span>{this.state.counter2}</span>
            {/* button for increament */}
            <button
              onClick={() => {
                this.setState({ counter2: this.state.counter2 + 1 });
              }}
            >
              +
            </button>
            {/* button for decreament */}
            <button
              onClick={() => {
                this.setState({ counter2: this.state.counter2 - 1 });
              }}
            >
              -
            </button>
          </div>
          {/* here we use another class component in this class component to
          understand lifecycle in deep as we learn earlier first of all mounting
          phase then updating after that unmounting phase so first of all
          mounting and updating phase will executed of parent component then
          mounting and updating phase of child component will start executing
          and then unmounting phase of parent component will executed then
          unmounting of child will executed */}
          <Lifecyclecomp2 />
        </Container>
      </>
    );
  }
}
export default Lifecycle;
