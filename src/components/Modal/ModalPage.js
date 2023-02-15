import React from "react";
import { useSelector } from "react-redux";
import ModalPageStyle from "../../style/modal/ModalPageStyle";
import ModalInnerPage from "./ModalInnerPage";

const ModalPage = ({ modalNum, setModalNum }) => {
  const isDarkMode = useSelector((state) => {
    return state.darkMode.isDarkMode;
  });
  return (
    <div>
      <ModalPageStyle modalNum={modalNum} isDarkMode={isDarkMode}>
        <ModalInnerPage modalNum={modalNum} setModalNum={setModalNum} />
      </ModalPageStyle>
    </div>
  );
};

export default ModalPage;
