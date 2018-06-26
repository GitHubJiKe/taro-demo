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
    this.state = {
      functionNames: [
        'componentWillMount',
        'componentDidMount',
        'componentWillUnmount',
        'componentDidShow',
        'componentDidHide'
      ]
    };
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
        <View style='margin-top:30px;background:brown;'>
          <Text>生命周期方法：</Text>
          {this.state.functionNames.map((t, idx) => {
            return <Text key={idx} className="funName">{t}</Text>
          })}
        </View>
      </View>
    )
  }
}

