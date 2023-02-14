import React, { useState } from "react";
import SelectStyle from "../style/SelectStyle";
import Dropdown from "react-bootstrap/Dropdown";

const SelectArea = () => {
  const flexDisplay = {
    display: "flex",
    border: "1px solid gray",
    overflow: "hidden",
  };
  const [select1, setSelect1] = useState("리액트");
  const [select2, setSelect2] = useState("리액트");
  const selectChange = (e, selectNum) => {
    const optionName = e.target.textContent;
    switch (selectNum) {
      case 1:
        setSelect1(optionName);
        break;
      case 2:
        setSelect2(optionName);
        break;
      default:
        break;
    }
  };
  return (
    <div style={flexDisplay}>
      <SelectStyle notHidden={false}>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {select1}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => selectChange(e, 1)}>
              리액트
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => selectChange(e, 1)}>
              자바
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => selectChange(e, 1)}>
              자바스크립트
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => selectChange(e, 1)}>
              뷰
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => selectChange(e, 1)}>
              노드제이에스
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </SelectStyle>
      <SelectStyle notHidden={true}>
        <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            {select2}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => selectChange(e, 2)}>
              리액트
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => selectChange(e, 2)}>
              자바
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => selectChange(e, 2)}>
              자바스크립트
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => selectChange(e, 2)}>
              뷰
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => selectChange(e, 2)}>
              노드제이에스
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </SelectStyle>
    </div>
  );
};

export default SelectArea;
