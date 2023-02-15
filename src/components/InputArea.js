import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatchAddList } from "../redux/modules/listUpdate";

const InputArea = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const titleRef = useRef();
  const descRef = useRef();
  const newId = useSelector((state) => {
    return state.listUpdate[state.listUpdate.length - 1].id + 1;
  });
  const isValidate = (target) => {
    if (target) {
      return true;
    } else {
      return false;
    }
  };
  const addList = (event) => {
    event.preventDefault();
    if (!isValidate(title)) {
      alert("제목을 입력하세요");
      titleRef.current.focus();
      return;
    } else if (!isValidate(desc)) {
      alert("내용을 입력하세요");
      descRef.current.focus();
      return;
    }
    let newTask = {
      id: newId,
      title,
      desc,
      isDone: false,
    };
    dispatch(dispatchAddList(newTask));
    setTitle("");
    setDesc("");
  };
  return (
    <form onSubmit={addList}>
      제목
      <input
        type="text"
        ref={titleRef}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      내용
      <input
        type="text"
        ref={descRef}
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};

export default InputArea;
