import * as actions from "../Action/actiontypes";

const INITIAL_STATE = {
  count: 0,
};

const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case actions.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default counter;