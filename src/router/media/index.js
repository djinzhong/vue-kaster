const News = () => import('views/media/News')
const NewsList = () => import('views/media/news/NewsList')
const AddNews = () => import('views/media/news/AddNews')
const Video = () => import('views/media/Video')
const VideoList = () => import('views/media/video/VideoList')
const AddVideo = () => import('views/media/video/AddVideo')

export default [
  {
    path: 'news',
    name: 'news',
    component: News,
    redirect: 'news/newsList',
    children: [{
      path: 'newsList',
      name: 'newsList',
      component: NewsList
    }, {
      path: 'addNews',
      name: 'addNews',
      component: AddNews
    }]
  },
  {
    path: 'video',
    name: 'video',
    component: Video,
    redirect: 'video/videoList',
    children: [{
      path: 'videoList',
      name: 'videoList',
      component: VideoList
    }, {
      path: 'addVideo',
      name: 'addVideo',
      component: AddVideo
    }]
  }
]
