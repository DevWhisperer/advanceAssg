import React from "react";
import ModalPageStyle from "../../style/modal/ModalPageStyle";
import ModalInnerPage from "./ModalInnerPage";

const ModalPage = ({ modalNum, setModalNum }) => {
  return (
    <div>
      <ModalPageStyle modalNum={modalNum}>
        <ModalInnerPage modalNum={modalNum} setModalNum={setModalNum} />
      </ModalPageStyle>
    </div>
  );
};

export default ModalPage;
