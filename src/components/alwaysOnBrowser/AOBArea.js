import React from "react";
import { useDispatch } from "react-redux";
import { dispatchToggleDarkmode } from "../../redux/modules/darkMode";
import AOBAreaStyle from "../../style/alwaysOnBrowser/AOBAreaStyle";

const AOBArea = () => {
  const dispatch = useDispatch();
  const darkModeOnClickHandler = () => {
    dispatch(dispatchToggleDarkmode());
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AOBAreaStyle>
      <button onClick={darkModeOnClickHandler}>다크모드</button>
      <button onClick={scrollTop}>Up</button>
    </AOBAreaStyle>
  );
};

export default AOBArea;
