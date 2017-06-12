import React from 'react'
import {
  hashHistory,
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import { sections, defaultSection } from 'main/app/sections/index'

import { Footer }   from 'main/layout/components/footer.jsx'
import { Header }   from 'main/layout/components/header.jsx'
import { NotFound } from 'main/layout/components/not-found.jsx'

import { View3D } from 'main/3d/components/main.jsx'

const MainApp = () =>
  <Router history={hashHistory}>
    <main className="app">
      <Header />

      <div className="app-content" role="presentation">
        <Switch>
          <Route key="default" exact={true} path="/" component={defaultSection.component} />
          {sections.map((section, index) =>
            <Route key={index} path={section.target} component={section.component} />
          )}
          <Route key="view-3d" path="/3d" component={View3D} />
          <Route key="error-404" component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </main>
  </Router>

export {MainApp}
