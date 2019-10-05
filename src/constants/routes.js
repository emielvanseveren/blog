// main pages
import Home from '../components/pages/Home'
import Article from '../components/pages/Article'

const routes = [
  {
    path:      '/',
    component: Home,
    exact:     true
  },
  {
    path:      '/article/:title',
    component: Article
  },
  {
    component: NotFound
  }
]

export default routes
