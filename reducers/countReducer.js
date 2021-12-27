const INIT_STATE = { current: 0 };

const countReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, current: state.current + 1 };
    }
    case 'DECREMENT': {
      if (state.current >= 1) {
        return { ...state, current: state.current - 1 };
      }
      return { ...state };
    }
    case 'RESET': {
      return { ...state, current: 0 };
    }
    case 'STEP': {
      return { ...state, current: state.current + action.payload.step };
    }
    default:
      return state;
  }
};

export { countReducer };
