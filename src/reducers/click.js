import { CLICK } from '../constants/index';

function initState(params) {
  return { num: 0 }
}

export default function click(state = initState(), action) {
  const { type, payload } = action;
  switch (type) {
    case CLICK:
      return { ...state, num: state.num + 1 };
    default:
      return state;
  }
}