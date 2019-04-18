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
  TableColumn,
  Card,
  Popover,
  Pagination,
  Upload,
  Dialog,
  Select,
  Option,
  DatePicker
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
  .use(Card)
  .use(Popover)
  .use(Pagination)
  .use(Upload)
  .use(Dialog)
  .use(Select)
  .use(Option)
  .use(DatePicker)

Vue.prototype.$message = Message
