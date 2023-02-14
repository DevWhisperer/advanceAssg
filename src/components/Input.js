import React from "react";
import { useState } from "react";

const Input = () => {
  const [normalInput, setNormalInput] = useState("");
  const [moneyInput, setMoneyInput] = useState("");
  const normalInputChangeHandler = (e) => {
    let newInput = e.target.value;
    setNormalInput(newInput);
  };
  const moneyInputChangeHandler = (e) => {
    let newInput = e.target.value.replace(/[^0-9]/g, "");
    setMoneyInput(newInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  };
  const inputAlert = () => {
    let moneyInputWithoutComma = moneyInput.replace(/[^0-9]/g, "");
    alert(`{name: ${normalInput}, price: ${moneyInputWithoutComma}}`);
  };
  return (
    <div>
      이름 :
      <input
        type="text"
        name="normal"
        value={normalInput}
        onChange={normalInputChangeHandler}
      />
      가격 :
      <input
        type="text"
        name="money"
        value={moneyInput}
        onChange={moneyInputChangeHandler}
      />
      <button onClick={inputAlert}>저장</button>
    </div>
  );
};

export default Input;
