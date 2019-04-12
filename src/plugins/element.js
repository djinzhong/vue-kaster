import Vue from 'vue'
import {
  Button,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Message,
  Form,
  FormItem,
  Input,
  Table,
  TableColumn
} from 'element-ui'

Vue.use(Button)
  .use(Radio)
  .use(RadioGroup)
  .use(RadioButton)
  .use(Checkbox)
  .use(CheckboxButton)
  .use(CheckboxGroup)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Table)
  .use(TableColumn)

Vue.prototype.$message = Message
