import React, { Component } from 'react'
import {
  hashHistory,
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { sections, defaultSection } from 'main/app/sections/index'

import { Footer }   from 'main/layout/footer/containers/footer.jsx'
import { Header }   from 'main/layout/header/containers/header.jsx'
import { NotFound } from 'main/layout/components/not-found.jsx'

import { View3D } from 'main/3d/components/main.jsx'

class ClassicApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isScrolled: false
    }

    this.setScroll = this.setScroll.bind(this)
  }

  componentDidMount() {
    this.setScroll()

    window.addEventListener('scroll', this.setScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setScroll)
  }

  setScroll() {
    this.setState({
      isScrolled: this.content.offsetTop - document.body.scrollTop <= 0
    })
  }

  render() {
    return (
      <main className="app classic-app">
        <Header />

        <div ref={element => this.content = element} className="app-content" role="presentation">
          <Switch>
            <Route key="default" exact={true} path="/classic" component={defaultSection.component} />
            <Route key="default2" exact={true} path="/classic/" component={defaultSection.component} />
            {sections.map((section, index) =>
              <Route key={index} path={section.target} component={section.component} />
            )}
          </Switch>
        </div>

        {this.state.isScrolled &&
          <button className="back-to-top" onClick={() => this.content.scrollIntoView()}>
            <span className="fa fa-arrow-up" />
            <span className="sr-only">back to top of the page</span>
          </button>
        }

        <Footer />
      </main>
    )
  }
}

const MainApp = () =>
  <Router history={hashHistory}>
    <Switch>
      {/*<Route key="default-main" exact={true} path="" component={ClassicApp} />*/}
      <Route key="classic" path="/classic" component={ClassicApp} />
      <Route key="view-3d" path="/3d" component={View3D} />
      <Route key="error-404" component={NotFound} />
    </Switch>
  </Router>

export {MainApp}
