import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 1
    }
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  add = e => {
    this.state.text++;
    this.setState({});
  }

  reduce = e => {
    this.state.text--;
    this.setState({});
  }

  render() {
    return (
      <View className='index'>
        <Text className="hello">{this.state.text}</Text>
        <Button onClick={this.add}>Add</Button>
        <Button onClick={this.reduce}>Reduce</Button>
      </View>
    )
  }
}

