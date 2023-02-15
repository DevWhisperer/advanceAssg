import React from "react";
import Buttons from "../style/Buttons";

const ButtonArea = () => {
  const buttonClick = (num) => {
    alert(`${num}번 버튼이 클릭됨`);
  };
  const buttonColor = ["red", "orange", "yellow", "green", "blue", "purple"];
  const buttonLogo = ["", "", "📒", "📗", "📘", ""];
  return (
    <div>
      {buttonColor.map((color, i) => {
        let width = (i + 3) * 10;
        return (
          <Buttons
            color={color}
            width={width}
            onClick={() => buttonClick(i + 1)}
          >
            {i + 1} {buttonLogo[i]}
          </Buttons>
        );
      })}
    </div>
  );
};
export default ButtonArea;
