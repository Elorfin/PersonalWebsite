import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { select } from 'main/app/selectors'
import { SocialNetworks } from 'main/app/containers/social.jsx'

const CivilityPanel = () =>
  <section className="content-panel">
    <h3>Civility</h3>

    <ul className="list-items">
      <li className="list-item">
        <span className="fa fa-fw fa-mars" />
        Male
      </li>

      <li className="list-item">
        <span className="fa fa-fw fa-user" />
        Single, no children
      </li>

      <li className="list-item">
        <span className="fa fa-fw fa-birthday-cake" />
        31/08/1989
      </li>

      <li className="list-item">
        <span className="fa fa-fw fa-map-marker" />
        Grenoble, FRANCE
      </li>
    </ul>
  </section>

const MorePanel = () =>
  <section className="content-panel">
    <h3>Other</h3>
  </section>

class AboutPanel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false
    }
  }

  getDescription() {
    let description = this.props.description.replace(/(?:\r\n|\r|\n)/g, '<br />')
    if (!this.state.expanded) {
      const firstP = description.indexOf('<br />')
      description = description.substr(0, -1 !== firstP ? firstP : 500) + ' (...)'
    }

    return description
  }

  render() {
    return (
      <section className="content-panel text-center">
        <h3>About me</h3>

        <p dangerouslySetInnerHTML={{__html: this.getDescription()}} />

        <button className="btn btn-sm btn-link" onClick={() => this.setState({expanded: !this.state.expanded})}>
          Learn more
        </button>
      </section>
    )
  }
}

AboutPanel.propTypes = {
  description: T.string.isRequired
}

const About = props =>
  <div>
    <section className="desktop-banner-container">
      <div className="desktop-banner container">
        <h2>3D desktop</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="desktop-banner-btns">
          <button type="button" className="desktop-cancel">
            No, thanks.
          </button>

          <NavLink to="/3d" className="desktop-open">
            Try it now ! <span className="fa fa-arrow-right" />
          </NavLink>
        </div>
      </div>
    </section>

    <section className="container app-section">
      <h2 className="sr-only">About</h2>

      <div className="row">
        <div className="col-8">
          <AboutPanel description={props.description} />
        </div>

        <div className="col-4">
          <SocialNetworks />
          <CivilityPanel />
          <MorePanel />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <section className="content-panel content-panel-success content-panel-icon">
            <span className="panel-icon fa fa-plus" />

            <h3 className="text-success">What I like</h3>

            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Nulla mi lorem, fringilla</li>
              <li>Donec eu blandit odio</li>
              <li>Mauris ut risus nec mauris bibendum luctus.</li>
              <li>Mauris convallis ut libero id vulputate. Donec eu blandit odio.</li>
            </ul>
          </section>
        </div>

        <div className="col">
          <section className="content-panel content-panel-danger content-panel-icon">
            <span className="panel-icon fa fa-minus" />

            <h3 className="text-danger">What I dislike</h3>

            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Nulla mi lorem, fringilla</li>
              <li>Donec eu blandit odio</li>
              <li>Sed molestie non diam ac rutrum.</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  </div>

About.propTypes = {
  description: T.string.isRequired
}

const mapStateToProps = state => {
  return {
    description: select.description(state)
  }
}

const ConnectedAbout = connect(mapStateToProps, {})(About)

export {
  ConnectedAbout as About
}
