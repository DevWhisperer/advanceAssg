import { useDispatch } from "react-redux";
import { dispatchAddList } from "../redux/modules/listUpdate";

const InputArea = ({ todoList }) => {
  const dispatch = useDispatch();
  const guidGenerator = () => {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };
  const addList = (event) => {
    event.preventDefault();
    let newTask = {
      id: guidGenerator(),
      title: event.target.title.value,
      desc: event.target.desc.value,
      isDone: false,
    };
    dispatch(dispatchAddList(newTask));
    event.target.title.value = "";
    event.target.desc.value = "";
  };
  return (
    <form onSubmit={addList}>
      제목
      <input type="text" name="title" />
      내용
      <input type="text" name="desc" />
      <input type="submit" />
    </form>
  );
};

export default InputArea;
