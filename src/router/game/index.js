// 比赛中心
const Game = () => import('views/game/Game')
const Horse = () => import('views/game/horse/Horse')
const AddHorse = () => import('views/game/horse/AddHorse')
const Caballero = () => import('views/game/caballero/caballero')
const AddCaballero = () => import('views/game/caballero/AddCaballero')
const GameList = () => import('views/game/game/GameList')
const AddGame = () => import('views/game/game/AddGame')
const Site = () => import('views/game/site/Site')
const AddSite = () => import('views/game/site/AddSite')
const GameSession = () => import('views/game/session/Session')
const AddSession = () => import('views/game/session/AddSession')

export default [{
  path: '',
  name: 'game',
  component: Game,
  redirect: 'horse',
  children: [
    // 马匹列表
    {
      path: 'horse',
      name: 'horse',
      component: Horse
    },
    {
      path: 'addhorse',
      name: 'addhorse',
      component: AddHorse
    },
    {
      path: 'caballero', // 骑师与练马师详情查看
      name: 'caballero',
      component: Caballero
    },
    {
      path: 'addCaballero', // 新增骑师练马师
      name: 'addcaballero',
      component: AddCaballero
    },
    {
      path: 'gameList', // 比赛
      name: 'gameList',
      component: GameList
    },
    {
      path: '/addgameList', // 新增比赛
      name: 'addgameList',
      component: AddGame
    },
    {
      path: 'site', // 场地信息
      name: 'site',
      component: Site
    },
    {
      path: 'addSite', // 新增场地
      name: 'addSite',
      component: AddSite
    },
    {
      path: '/gameSession', // 比赛具体场次
      name: 'gameSession',
      component: GameSession
    },
    {
      path: '/addSession', // 新增比赛场次
      name: 'addSession',
      component: AddSession
    }
  ]
}]
