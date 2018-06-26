import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './user-info.less';
import '@tarojs/async-await';

export default class UserInfo extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <View className="user-info">
        <View className="info-container">
          <Image className="avatar" src={userInfo.avatarUrl} />
          <Text className="nickname">{userInfo.nickName}</Text>
        </View>
      </View>
    );
  }
}