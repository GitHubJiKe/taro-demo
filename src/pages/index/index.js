import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './index.less';
import { connect } from '@tarojs/redux';
import { click, asyncClick } from '../../actions/click'


@connect(({ click }) => ({
  click
}), (dispatch) => ({
  _click() {
    dispatch(click())
  },
  _asyncClick() {
    dispatch(asyncClick())
  }
}))


export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text className="hello">{this.props.click.num}</Text>
        <Button onClick={this.props._click}>click</Button>
        <Button onClick={this.props._asyncClick}>asyncClick</Button>
      </View>
    )
  }
}

