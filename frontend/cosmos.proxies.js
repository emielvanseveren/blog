import createRouterProxy from 'react-cosmos-router-proxy'
import StatefulProxy from 'react-cosmos-stateful-proxy'
import createWrapperProxy from 'react-cosmos-wrapper-proxy'
import { CosmosGlobalStyle } from './src/constants/style'

export default [
  StatefulProxy,
  createRouterProxy(),
  createWrapperProxy({ component: CosmosGlobalStyle, defaultEnabled: true })
]
