import Taro, { Component } from '@tarojs/taro';
import Index from './pages/index';
import { Provider } from '@tarojs/redux';
import './app.less';
import configStore from './store';

const store = configStore();

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
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'))
