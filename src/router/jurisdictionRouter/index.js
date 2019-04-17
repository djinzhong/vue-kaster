const userList = () => import('views/jurisdiction/userList')
const AddUser = () => import('views/jurisdiction/AddUser')

export default [{
  path: 'userList',
  name: 'userList',
  component: userList
}, {
  path: 'addUser',
  name: 'addUser',
  component: AddUser
}]
