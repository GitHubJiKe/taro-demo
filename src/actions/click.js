import { CLICK } from '../constants';

export const click = () => {
  return { type: CLICK };
}

// 异步的action
export function asyncClick() {
  return dispatch => {
    setTimeout(() => {
      dispatch(click());
    }, 2000);
  }
}