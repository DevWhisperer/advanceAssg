const ADD_LIST = "ADD_LIST";
const DONE_TOGGLE = "DONE_TOGGLE";
const DELETE_TASK = "DELETE_TASK";

export const dispatchAddList = (newTask) => {
  return { type: ADD_LIST, newTask: newTask };
};

export const dispatchDoneTask = (id) => {
  return { type: DONE_TOGGLE, id };
};

export const dispatchDeleteTask = (id) => {
  return { type: DELETE_TASK, id };
};

const initialState = [
  { id: 0, title: "React", desc: "Study React", isDone: false },
];

const listUpdate = (state = initialState, action) => {
  let newList = [];
  switch (action.type) {
    case ADD_LIST:
      newList = [...state, action.newTask];
      return newList;
    case DONE_TOGGLE:
      state.map((todo) => {
        if (action.id === todo.id) {
          todo.isDone = !todo.isDone;
        }
        newList.push(todo);
      });
      return newList;
    case DELETE_TASK:
      return state.filter((todo) => {
        return todo.id !== action.id;
      });
    default:
      return state;
  }
};

export default listUpdate;
