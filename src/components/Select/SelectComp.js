import React from "react";
import { useState } from "react";
import SelectUpLine from "../../style/Select/SelectUpLine";
import SelectStyle2 from "../../style/SelectStyle2";
import dropdown_logo from "./dropdown_logo.jpg";
import List from "./List";

const SelectComp = ({ overflow }) => {
  const [listDown, setListDown] = useState(false);
  const [selectOne, setSelectOne] = useState("리액트");
  const dropdownToggle = () => {
    setListDown(!listDown);
  };
  if (overflow === true) {
    return (
      <SelectStyle2 isOverflow={true}>
        <SelectUpLine onClick={dropdownToggle}>
          {selectOne} <img src={dropdown_logo} width={"10px"} />
        </SelectUpLine>
        {listDown ? (
          <List setListDown={setListDown} setSelectOne={setSelectOne} />
        ) : (
          ""
        )}
      </SelectStyle2>
    );
  } else {
    return (
      <SelectStyle2 isOverflow={false}>
        <SelectUpLine onClick={dropdownToggle}>
          {selectOne} <img src={dropdown_logo} width={"10px"} />
        </SelectUpLine>
        {listDown ? (
          <List setListDown={setListDown} setSelectOne={setSelectOne} />
        ) : (
          ""
        )}
      </SelectStyle2>
    );
  }
};

export default SelectComp;
