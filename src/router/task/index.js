const Task = () => import('views/task/Task')
const Sign = () => import('views/task/Sign')

export default [
  // 任务
  {
    path: '',
    name: 'tasklList',
    component: Task
  },
  // 签到
  {
    path: 'sign',
    name: 'sign',
    component: Sign
  }
]
