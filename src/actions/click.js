import { CLICK } from '../constants';
import { showLoading } from './loading';
export const click = () => {
  return { type: CLICK };
}

// 异步的action
export function asyncClick() {
  return dispatch => {
    dispatch(showLoading());
    setTimeout(() => dispatch(click()), 5000);
  }
}