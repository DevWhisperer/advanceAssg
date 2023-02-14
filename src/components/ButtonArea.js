import React from "react";
import Buttons from "../style/Buttons";

const ButtonArea = () => {
  const buttonClick = (num) => {
    alert(`${num}번 버튼이 클릭됨`);
  };
  return (
    <div>
      <Buttons color="red" width="30px" onClick={() => buttonClick("1")}>
        1
      </Buttons>
      <Buttons color="oragne" width="40px" onClick={() => buttonClick("2")}>
        2
      </Buttons>
      <Buttons color="yellow" width="50px" onClick={() => buttonClick("3")}>
        3
      </Buttons>
      <Buttons color="green" width="60px" onClick={() => buttonClick("4")}>
        4
      </Buttons>
      <Buttons color="blue" width="70px" onClick={() => buttonClick("5")}>
        5
      </Buttons>
      <Buttons color="purple" width="80px" onClick={() => buttonClick("6")}>
        6 😁
      </Buttons>
    </div>
  );
};
export default ButtonArea;
