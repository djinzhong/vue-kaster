const FatherToSon = () => import('pages/father/fatherToSon/Father') // 父传子
const SonToFather = () => import('pages/father/sonToFather/Father') // 子传父
const Secret = () => import('pages/father/index') // 父子传值
const Bubbing = () => import('pages/grand/Bubbing') // 冒泡与捕获
const Grandson = () => import('pages/grand/Grandson') // 祖传孙
const Grandpa = () => import('pages/grand/Grandpa') // 孙传祖

export default [

  {
    path: 'fatherToSon',
    name: 'fatherToSon',
    component: FatherToSon
  },
  {
    path: 'sonToFather',
    name: 'sonToFather',
    component: SonToFather
  },
  {
    path: 'secret',
    name: 'secret',
    component: Secret
  },
  {
    path: 'bubbing',
    name: 'bubbing',
    component: Bubbing
  },
  {
    path: 'grandson',
    name: 'grandson',
    component: Grandson
  },
  {
    path: 'grandpa',
    name: 'grandpa',
    component: Grandpa
  }

]