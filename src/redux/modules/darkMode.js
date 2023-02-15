const TOGGLE_DARKMODE = "TOGGLE_DARKMODE";

export const dispatchToggleDarkmode = () => {
  return { type: TOGGLE_DARKMODE };
};

const initialState = { isDarkMode: false };

const darkMode = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      const newState = Object.assign({}, state, {
        isDarkMode: !state.isDarkMode,
      });
      return newState;
    default:
      return state;
  }
};

export default darkMode;
