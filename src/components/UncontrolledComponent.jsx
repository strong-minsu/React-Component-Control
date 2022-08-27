import React from "react";
class UncontrolledComponent extends React.Component {
  inputRef = React.createRef();

  render() {
    console.log("initial render", this.inputRef);
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  //ref 확인
  componentDidMount() {
    console.log("componentDidMount", this.inputRef);
  }
  click = () => {
    //input 엘리먼트의 현재 상태 값(value)룰 꺼내서 전송
    // const input = document.querySelector("#my-input");
    //react에서 지양하는 방식임 -> realDOM...사용 xx
    //그래서 나온 것  -> 래퍼런스
    // console.log(input.value);

    //래퍼런스 참조로 갖고 사용!
    console.log(this.inputRef.current.value);
  };
}
export default UncontrolledComponent;
