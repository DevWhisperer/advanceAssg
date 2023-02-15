import React, { useState } from "react";
import ModalBackground from "../../style/modal/ModalBackground";
import ModalButton1 from "../../style/modal/ModalButton1";
import ModalButton2 from "../../style/modal/ModalButton2";
import ModalPage from "./ModalPage";

const ModalArea = () => {
  const [modalNum, setModalNum] = useState(0);
  const modalOneOn = () => {
    setModalNum(1);
  };
  const modalTwoOn = () => {
    setModalNum(2);
  };
  const modalBackgroundClickHandler = (e) => {
    if (e && modalNum === 2) {
      setModalNum(0);
    }
  };

  return (
    <div>
      <ModalButton1 onClick={modalOneOn}>모달1</ModalButton1>
      <ModalButton2 onClick={modalTwoOn}>모달2</ModalButton2>
      <ModalBackground
        modalNum={modalNum}
        onClick={modalBackgroundClickHandler}
      ></ModalBackground>
      <ModalPage modalNum={modalNum} setModalNum={setModalNum} />
    </div>
  );
};

export default ModalArea;
