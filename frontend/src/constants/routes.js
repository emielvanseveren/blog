// main pages
import Home from '../components/pages/Home'
import PostPage from '../components/pages/PostPage'
import NotFound from '../components/pages/NotFound'

const routes = [
  {
    path:      '/',
    component: Home,
    exact:     true
  },
  {
    path:      '/:title',
    component: PostPage
  },
  {
    component: NotFound
  }
]

export default routes
