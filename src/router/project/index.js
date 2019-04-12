// 大神列表
const Manito = () => import('views/project/Manito')
const ManitoList = () => import('views/project/manito/manitoList')
const AddManito = () => import('views/project/manito/addManito')

const applyList = () => import('views/project/manito/applyList')

// 方案列表
const project = () => import('views/project/Project')

// 即时比赛
const Game = () => import('views/project/game')
const gameList = () => import('views/project/game/gameList')
const gameDetails = () => import('views/project/game/gameDetails')

export default [
  {
    path: 'manito',
    name: 'manito',
    component: Manito,
    redirect: 'manito/manitoList',
    children: [{
      path: 'manitoList',
      name: 'manitoList',
      component: ManitoList
    }, {
      path: 'addManito',
      name: 'addManito',
      component: AddManito
    }]
  },
  {
    path: 'manito/applyList',
    name: 'applyList',
    component: applyList
  },
  {
    path: 'project',
    name: 'project',
    component: project
  },
  {
    path: 'game',
    name: 'projectGame',
    component: Game,
    redirect: 'game/gameList',
    children: [
      {
        path: 'gameList',
        name: 'gameProjectList',
        component: gameList
      },
      {
        path: 'gameDetails',
        name: 'gameProjectDetails',
        component: gameDetails
      }
    ]
  }
]
