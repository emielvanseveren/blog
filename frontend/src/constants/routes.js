// main pages
import Home from '../components/pages/Home'
import Post from '../components/pages/Post'
import NotFound from '../components/pages/NotFound'

const routes = [
  {
    path:      '/',
    component: Home,
    exact:     true
  },
  {
    path:      '/:title',
    component: Post
  },
  {
    component: NotFound
  }
]

export default routes
