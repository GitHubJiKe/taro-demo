import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './about.less';
import avatarSrc from './avatar.jpg';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 1
    }
  }

  config = {
    navigationBarTitleText: '关于'
  }

  render() {
    return (
      <View className='about'>
        <Image style='width:100px;height:100px;background:#fff;border-radius:50%;' src={avatarSrc} />
      </View>
    )
  }
}

