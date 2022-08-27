import React from "react";
class ControlledComponent extends React.Component {
  state = {
    value: " ",
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} onChange={this.change} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  //input의 event 처리 chage targer value..
  change = (event) => {
    //render가 다시 일어남  -> 입력마다 state가 변함
    this.setState({ value: event.target.value });
  };

  click = () => {
    console.log(this.state.value);
  };
}
export default ControlledComponent;
