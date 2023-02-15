import React from "react";
import LiTagStyle from "../../style/Select/LiTagStyle";

const List = ({ setSelectOne, setListDown }) => {
  const listName = ["리액트", "자바", "자바스크립트", "노드제이에스", "뷰"];
  const clickListItemHandler = (e) => {
    setSelectOne(e.target.textContent);
    setListDown(false);
  };
  return (
    <div style={{ border: "1px solid gray" }}>
      {listName.map((item, i) => (
        <LiTagStyle key={i} onClick={clickListItemHandler}>
          {item}
        </LiTagStyle>
      ))}
    </div>
  );
};

export default List;
