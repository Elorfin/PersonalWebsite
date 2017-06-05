import React from 'react'
import {hashHistory, HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import {sections} from './../constants'

import {Header} from './header.jsx'
import {Footer} from './footer.jsx'
import {NotFound} from './not-found.jsx'

const MainApp = props =>
  <Router history={hashHistory}>
    <main className="app">
      <Header />

      <div className="app-content">
        <Switch>
          <Route exact={true} path="/" component={sections.find(section => section.default).component} />
          {sections.map((section, index) =>
            <Route key={index} path={section.target} component={section.component} />
          )}
          <Route component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </main>
  </Router>


export {MainApp}
