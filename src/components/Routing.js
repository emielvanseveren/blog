import React from 'react'
import uuid from 'uuid/v4'
import routes from '../constants/routes'
import { Route, Switch, Router } from 'react-router-dom'
import history from '../constants/history'

// checks if history exists
export default function Routing(){
  return (
    <Router history={history}>
      <Switch>
        {
          routes.map(({ path, component, exact = false }) => (<Route component={component} exact={exact} key={uuid()} path={path}/>)
          )
        }
      </Switch>
    </Router>
  )
}
