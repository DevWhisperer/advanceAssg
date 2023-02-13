import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  dispatchDeleteTask,
  dispatchDoneTask,
} from "../redux/modules/listUpdate";

const InputBox = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteTask = (id) => {
    dispatch(dispatchDeleteTask(id));
  };
  const doneTask = (id) => {
    dispatch(dispatchDoneTask(id));
  };
  const goToDetail = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div key={item.id}>
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
      <button onClick={() => deleteTask(item.id)}>삭제하기</button>
      <button onClick={() => doneTask(item.id)}>
        {item.isDone ? "취소" : "완료"}
      </button>
      <button onClick={() => goToDetail(item.id)}>상세보기</button>
    </div>
  );
};

export default InputBox;
