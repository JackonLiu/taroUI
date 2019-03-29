/* eslint-disable import/first */
import Taro from '@tarojs/taro'
import './index.scss'
import { AtButton } from 'taro-ui'
import './custom-variables.scss'
import { View } from '@tarojs/components'

export default class Index extends Taro.Component {
  render () {
    return <View className='btn-item'>
      <AtButton className='at-button'>全局样式类按钮</AtButton>
    </View>
  }
}

