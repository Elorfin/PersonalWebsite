import React from 'react'

import { SocialNetworks } from 'main/app/containers/social.jsx'

const Contact = () =>
  <section className="container app-section">
    <h2 className="sr-only">Contact</h2>

    <div className="row">
      <div className="col-8">
        <form className="content-panel">
          <h3>Write me a message</h3>

          <div className="form-group">
            <label className="sr-only" htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="your email address"
            />
          </div>

          <div className="form-group">
            <label className="sr-only" htmlFor="">Message</label>
            <textarea
              className="form-control"
              rows="10"
              placeholder="your message"
            />
          </div>

          <button type="submit" className="btn btn-block btn-primary">
            Send
          </button>
        </form>
      </div>

      <div className="col-4">
        <SocialNetworks />
      </div>
    </div>
  </section>

export {
  Contact
}
