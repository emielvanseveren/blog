// main pages
import Home from '../components/pages/Home'
import uuid from 'uuid/v4'
import PostPage from '../components/pages/PostPage'
import Preview from '../components/pages/Preview'
import NotFound from '../components/pages/NotFound'

const routes = [
  {
    path:      '/',
    component: Home,
    exact:     true,
  },
  {
    path:       '/preview',
    component:  Preview,
  },
  {
    path:      '/:title',
    component: PostPage,
  },
  {
    component: NotFound,
  }
]

export default routes
