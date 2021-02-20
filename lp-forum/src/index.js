import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Model from './Model'

const routing = (
  <Router>
    <div>
      <Route path="/app" component={App} />
      <Route path="/model" component={Model} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))