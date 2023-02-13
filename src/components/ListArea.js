import React from "react";
import { useSelector } from "react-redux";
import InputBox from "./InputBox";
import { DoneTask } from "../style/PageStyle";

const ListArea = () => {
  const list = useSelector((state) => {
    return state.listUpdate;
  });
  return (
    <div>
      {list
        .filter((item) => item.isDone == false)
        .map((item) => {
          return <InputBox key={item.id} item={item} />;
        })}
      <p>------------------------------</p>
      {list
        .filter((item) => item.isDone == true)
        .map((item) => {
          return (
            <DoneTask>
              <InputBox key={item.id} item={item} />
            </DoneTask>
          );
        })}
    </div>
  );
};

export default ListArea;
