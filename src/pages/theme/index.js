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
      <View className='at-article'>
        <View className='at-article__h1'>
          SCSS 主题变量覆盖
        </View>
        <View className='at-article__info'>
          &nbsp;&nbsp;&nbsp;Jackson
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__h2'>SCSS </View>
            <View className='at-article__h3'>新建一个主题样式文件</View>
            <View className='at-article__p'>
              Taro UI 的组件样式是使用 SCSS 编写的，如果你的项目中也使用了 SCSS，那么可以直接在项目中改变 Taro UI 的样式变量。
              新建一个主题样式文件，例如 custom-variables.scss，并写入以下内容：（如有需要，可使用自定义主题生成器）
            </View>
            <View className='at-article__p'>
              改变主题变量，具体变量名可查看 taro-ui/dist/style/variables/default.scss 文件
              覆写的变量，需要在引入 taro ui 默认样式之前定义，默认主题变量命名
              之后在项目的入口文件中引入以上的样式文件即可（无需重复引入组件的默认样式）
            </View>
          </View>
        </View>
      </View>
    </View>
  }
}

