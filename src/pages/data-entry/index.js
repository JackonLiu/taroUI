import Taro from '@tarojs/taro'
import { View, Picker, PickerView, PickerViewColumn, Image } from '@tarojs/components'
import {
  AtCheckbox,
  AtImagePicker,
  AtInput,
  AtInputNumber,
  AtForm,
  AtRadio,
  AtRange,
  AtRate,
  AtSearchBar,
  AtSlider,
  AtSwitch,
  AtTextarea,
} from 'taro-ui'
import DocsHeader from '../components/doc-header'
import './index.scss'

export default class DataEntryPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)

    const date = new Date()
    const years = []
    const months = []
    const days = []

    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }

    this.state = {
      checkedList: ['list1', 'list4'],
      checkboxOption: [
        { value: 'list1', label: 'iPhone X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' },
        { value: 'list2', label: 'HUAWEI P20' },
        { value: 'list3', label: 'OPPO Find X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true },
        { value: 'list4', label: 'vivo NEX', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true }
      ],
      files: [
        {
          url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
        },
        {
          url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
        },
        {
          url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
        }
      ],
      inputValue1: '',
      inputValue2: '',
      inputValue3: '',
      inputValue4: '',
      inputValue5: '',
      inputValue6: '',
      inputValue7: '',
      inputNumber1: 1,
      inputNumber2: 1,
      inputNumber3: 1,
      selector: ['中国', '美国', '巴西', '日本'],
      multi_selector: [['a', 'b'], ['c', 'd']],
      selectorValue: 0,
      startTime: '02:32',
      endTime: '05:32',
      years,
      year: date.getFullYear(),
      months,
      month: 2,
      days,
      day: 2,
      value: [9999, 5, 17],
      isWeapp: false,
      radioOptions: [
        { label: '单选项一', value: 'option1', desc: '单选项描述' },
        { label: '单选项二', value: 'option2' },
        { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
      ],
      radioValue: 'option1',
      rangeValue: [20, 60],
      rateValue: 3,
      searchbarValue: '',
      switchValue: false,
      textareaValue: '',
    }
  }

  componentDidMount () {
    const env = Taro.getEnv()
    this.setState({
      isWeapp: env === Taro.ENV_TYPE.WEAPP,
      isAlipay: env === Taro.ENV_TYPE.ALIPAY,
    })
  }

  handleCheckboxChange (value) {
    this.setState({
      checkedList: value
    })
  }

  handleImageChange (stateName, files) {
    this.setState({
      [stateName]: files
    })
  }

  handleInput (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  handleNumberChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  handlePickerChange (e) {
    this.setState({
      selectorValue: e.detail.value
    })
  }

  handlePickerViewChange (e) {
    const val = e.detail.value

    this.setState({
      year: this.state.years[val[0]],
      month: this.state.months[val[1]],
      day: this.state.days[val[2]],
      value: val
    })
  }

  handleRadioChange (value) {
    this.setState({
      radioValue: value
    })
  }

  handleRangeChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  handleRateChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  handleSearchBarChange (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }

  onActionClick () {
    Taro.showToast({
      title: '开始搜索',
      icon: 'success',
      duration: 2000
    })
  }

  handleSwitchChange (value) {
    this.setState({
      switchValue: value
    })
  }

  handleTextareaChange (stateName, e) {
    this.setState({
      [stateName]: e.target.value
    })
  }

  render () {
    const { years, months, days, value, year, month, day, isWeapp, isAlipay } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='数据录入' desc='12 个组件'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* Radio */}
          <View className='panel'>
            <View className='panel__title'>Radio 单选框</View>
            <View className='panel__content no-padding'>
              <View className='radio-container'>
                <AtRadio options={this.state.radioOptions} value={this.state.radioValue} onClick={this.handleRadioChange.bind(this)} />
              </View>
            </View>
          </View>

          {/* Checkbox */}
          <View className='panel'>
            <View className='panel__title'>Checkbox 复选框</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <View className='checkbox-container'>
                  <AtCheckbox
                    options={this.state.checkboxOption}
                    selectedList={this.state.checkedList}
                    onChange={this.handleCheckboxChange.bind(this)}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Switch */}
          <View className='panel'>
            <View className='panel__title'>Switch 开关</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtForm>
                  <AtSwitch title='开启中' color='#EC585A' checked={this.state.switchValue} onChange={this.handleSwitchChange.bind(this)} />
                  <AtSwitch title='已关闭' color='#EC585A' border={false} />
                </AtForm>
              </View>
            </View>
          </View>

          {/* Input */}
          <View className='panel'>
            <View className='panel__title'>Input 输入框</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput name='inputValue1' title='标准五个字' type='text' placeholder='标准五个字' value={this.state.inputValue1} onChange={this.handleInput.bind(this, 'inputValue1')} />
                  <AtInput name='inputValue2' title='标题实在特别长就换行' placeholder='其他列保持正常间距' value={this.state.inputValue2} onChange={this.handleInput.bind(this, 'inputValue2')} />
                  <AtInput name='inputValue3' border={false} placeholder='无标题' value={this.state.inputValue3} onChange={this.handleInput.bind(this, 'inputValue3')} />
                </AtForm>
                <AtForm>
                  <AtInput
                    name='value1'
                    title='文本'
                    type='text'
                    placeholder='单行文本'
                    value={this.state.inputValue3}
                  />
                  <AtInput
                    name='value2'
                    title='数字'
                    type='number'
                    placeholder='请输入数字'
                  />
                  <AtInput
                    name='value3'
                    title='密码'
                    type='password'
                    placeholder='密码不能少于10位数'
                  />
                  <AtInput
                    name='value4'
                    title='身份证'
                    type='idcard'
                    placeholder='身份证号码'
                    value={this.state.inputValue3}
                  />
                  <AtInput
                    name='value5'
                    title='小数'
                    type='digit'
                    placeholder='请输入小数'
                    value={this.state.inputValue3}
                  />
                  <AtInput
                    name='value6'
                    border={false}
                    title='手机号码'
                    type='phone'
                    placeholder='手机号码'
                    value={this.state.inputValue3}
                  />
                </AtForm>
                <AtForm>
                  <AtInput
                    disabled
                    title='禁用'
                    type='text'
                    placeholder='禁止输入'
                    value={this.state.inputValue3}
                  />
                  <AtInput
                    error
                    title='出现错误'
                    type='text'
                    placeholder='点击按钮触发回调'
                    value={this.state.inputValue3}
                    onChange={this.handleChange}
                  />
                  <AtInput
                    editable={false}
                    title='不可编辑'
                    type='text'
                    placeholder='不可编辑'
                    value={this.state.inputValue3}
                  />
                  <AtInput
                    clear
                    border={false}
                    title='清除按钮'
                    placeholder='点击清除按钮清空内容'
                    type='text'
                    value={this.state.inputValue3}
                  />
                </AtForm>
                <AtInput
                  clear
                  title='验证码'
                  type='text'
                  maxLength='4'
                  placeholder='验证码'
                  value={this.state.inputValue3}
                >
                  <Image src='https://aotu.io/img.png' />
                </AtInput>
              </View>
            </View>
          </View>

          {/* Textarea */}
          <View className='panel'>
            <View className='panel__title'>Textarea 多行文本框</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtTextarea
                  value={this.state.textareaValue}
                  onChange={this.handleTextareaChange.bind(this, 'textareaValue')}
                  maxLength={200}
                  placeholder='你的问题是...'
                />
              </View>
            </View>
          </View>

          {/* SearchBar */}
          <View className='panel'>
            <View className='panel__title'>SearchBar 搜索栏</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtSearchBar
                  value={this.state.searchbarValue}
                  onChange={this.handleSearchBarChange.bind(this, 'searchbarValue')}
                  onActionClick={this.onActionClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* InputNumber */}
          <View className='panel'>
            <View className='panel__title'>InputNumber 数字输入框</View>
            <View className='panel__content'>
              {/* 基本用法 */}
              <View className='example-item'>
                <View className='example-item__desc'>min=0, max=10, step=1</View>
                <AtInputNumber
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.inputNumber1}
                  onChange={this.handleNumberChange.bind(this, 'inputNumber1')}
                />
              </View>
              <View className='example-item'>
                <View className='example-item__desc'>小数, step=0.1</View>
                <AtInputNumber
                  min={0}
                  max={10}
                  step={0.1}
                  value={this.state.inputNumber2}
                  onChange={this.handleNumberChange.bind(this, 'inputNumber2')}
                />
              </View>

              {/* 禁用 */}
              <View className='example-item'>
                <View className='example-item__desc'>禁用</View>
                <AtInputNumber
                  disabled
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.inputNumber3}
                  onChange={this.handleNumberChange.bind(this, 'inputNumber3')}
                />
              </View>

              {/* 大尺寸 */}
              <View className='example-item'>
                <View className='example-item__desc'>自定义宽度</View>
                <AtInputNumber
                  min={0}
                  max={10}
                  step={1}
                  width={200}
                  value={this.state.inputNumber3}
                  onChange={this.handleNumberChange.bind(this, 'inputNumber3')}
                />
              </View>
              <View className='example-item'>
                <View className='example-item__desc'>大尺寸</View>
                <AtInputNumber
                  size='lg'
                  min={0}
                  max={10}
                  step={1}
                  value={this.state.inputNumber3}
                  onChange={this.handleNumberChange.bind(this, 'inputNumber3')}
                />
              </View>
            </View>
          </View>

          {/* Range */}
          <View className='panel'>
            <View className='panel__title'>Range 范围选择器</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>
                  数值范围：{this.state.rangeValue[0]}~{this.state.rangeValue[1]}
                </View>
                <AtRange
                  value={[20, 60]}
                  onChange={this.handleRangeChange.bind(this, 'rangeValue')}
                />
              </View>
            </View>
          </View>

          {/* Slider */}
          <View className='panel'>
            <View className='panel__title'>Slider 滑动条</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>step=1</View>
                <AtSlider step={1} value={50} activeColor='#EC585A'></AtSlider>
              </View>
            </View>
          </View>

          {/* Rate */}
          <View className='panel'>
            <View className='panel__title'>Rate 评分</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtRate value={this.state.rateValue} onChange={this.handleRateChange.bind(this, 'rateValue')} />
              </View>
            </View>
          </View>

          {/* ImagePicker */}
          <View className='panel'>
            <View className='panel__title'>ImagePicker 图片选择器</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtImagePicker
                  files={this.state.files}
                  onChange={this.handleImageChange.bind(this, 'files')}
                />
              </View>
            </View>
          </View>

          {/* Picker */}
          <View className='panel'>
            <View className='panel__title'>Picker 选择器</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <Picker mode='selector' range={this.state.selector} value={this.state.selectorValue} onChange={this.handlePickerChange.bind(this)}>
                  <View className='demo-list-item'>
                    <View className='demo-list-item__label'>国家地区</View>
                    <View className='demo-list-item__value'>{this.state.selector[this.state.selectorValue]}</View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>MultiPicker 多列选择器</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <Picker mode='multiSelector' range={this.state.multi_selector} value={this.state.multi_selector} onChange={this.handlePickerChange.bind(this)}>
                  <View className='demo-list-item'>
                    <View className='demo-list-item__label'>请选择abcd</View>
                    <View className='demo-list-item__value'>{this.state.selector[this.state.multi_selector]}</View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>
          {/* TimePicker */}
          <View className='panel'>
            <View className='panel__title'>TimePicker 时间选择器</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <Picker mode='time' onChange={this.handlePickerChange.bind(this)}>
                  <View className='demo-list-item'>
                    <View className='demo-list-item__label'>选择时间</View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>DatePicker 日期选择器</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <Picker mode='date' start={this.state.startTime} end={this.state.endTime} fields={this.state.fields} onChange={this.handlePickerChange.bind(this)}>
                  <View className='demo-list-item'>
                    <View className='demo-list-item__label'>选择日期</View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>

          {/* PickerView */}
          <View className='panel'>
            <View className='panel__title'>PickerView 滚动选择器</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>嵌入页面的滑动选择器</View>
                {
                  isWeapp || isAlipay ? (
                    <View>
                      <View className='title-date'>{year}年{month}月{day}日</View>
                      <PickerView indicatorStyle='height: 50px;' className='picker' style='width: 100%; height: 300px; text-align: center;' value={value} onChange={this.handlePickerViewChange.bind(this)}>
                        <PickerViewColumn>
                          { years.map((item, idx) => <View key={idx} style='line-height: 50px'>{item}年</View>) }
                        </PickerViewColumn>
                        <PickerViewColumn>
                          { months.map((item, idx) => <View key={idx} style='line-height: 50px'>{item}月</View>) }
                        </PickerViewColumn>
                        <PickerViewColumn>
                          { days.map((item, idx) => <View key={idx} style='line-height: 50px'>{item}日</View>) }
                        </PickerViewColumn>
                      </PickerView>
                    </View>
                  ) : <View className='title-date'>暂时仅支持小程序</View>
                }
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}
      </View>
    )
  }
}
