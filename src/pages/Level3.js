import React from "react";
import Input from "../components/Input";
import ButtonArea from "../components/ButtonArea";
import SelectArea from "../components/SelectArea";
import ModalArea from "../components/Modal/ModalArea";
import { Link } from "react-router-dom";

const Level3 = () => {
  return (
    <div>
      <ModalArea />
      <Input />
      <ButtonArea />
      <SelectArea />
      <Link to="/">
        <button>홈으로 가기</button>
      </Link>
    </div>
  );
};

export default Level3;
