import { SHOW_LOADING, HIDE_LOADING } from '../constants/index';
import configStore from '../store';
import { hideLoading } from '../actions/loading';
import Taro from '@tarojs/taro';

export default function click(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOW_LOADING:
      Taro.showLoading();
      return state;
    case HIDE_LOADING:
      Taro.hideLoading();
      return state;
    default:
      return state;
  }
}