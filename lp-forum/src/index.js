import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Model from './Model'

const routing = (
  <Router>
    <div>
    <Route exact path="/">
        <App />
      </Route>
      <Route path="/model" component={Model} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))