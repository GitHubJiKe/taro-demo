import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/about/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: 'pages/index/index',
        text: 'Index'
      },
      {
        pagePath: 'pages/about/index',
        text: 'About'
      }]
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentCatchError() { }

  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
