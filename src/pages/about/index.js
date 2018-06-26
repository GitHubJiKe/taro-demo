import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, Button } from '@tarojs/components';
import UserInfo from '../components/user-info/index';
import './about.less';
import '@tarojs/async-await';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 1,
      userInfo: null
    }
  }

  config = {
    navigationBarTitleText: '关于'
  }


  componentDidMount() {
    Taro.authorize({ scope: 'scope.userInfo' }).then(res => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
      this._getUserInfo();
    }).catch(err => {
      Taro.showToast({ title: '授权错误', icon: 'none', duration: 1000 });
    })
  }

  _getUserInfo = () => {
    Taro.getUserInfo().then(res => {
      const { userInfo } = res;
      this.setState({ userInfo })
    }).catch(err => {
      Taro.showToast({
        title: '网络失败',
        icon: 'none',
        duration: 2000
      });
    });
  }


  render() {
    const { userInfo } = this.state;
    return (
      <View className='about'>
        {userInfo && <UserInfo userInfo={userInfo} />}
        {!userInfo && <Button openType="getUserInfo" onClick={this._getUserInfo}>获取用户信息</Button>}
      </View>
    )
  }
}

