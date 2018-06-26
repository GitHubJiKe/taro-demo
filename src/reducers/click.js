import { CLICK } from '../constants/index';
import configStore from '../store';
import { hideLoading } from '../actions/loading';
function initState(params) {
  return { num: 0 }
}

export default function click(state = initState(), action) {
  const { type, payload } = action;
  switch (type) {
    case CLICK:
      configStore().dispatch(hideLoading());
      return { ...state, num: state.num + 1 };
    default:
      return state;
  }
}