// main pages
import Home from '../components/pages/Home'
import Article from '../components/pages/Article'
import NotFound from '../components/pages/NotFound'

const routes = [
  {
    path:      '/',
    component: Home,
    exact:     true
  },
  {
    path:      '/:title',
    component: Article
  },
  {
    component: NotFound
  }
]

export default routes
