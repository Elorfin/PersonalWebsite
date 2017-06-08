import React from 'react'

const Contact = props =>
  <section className="container">
    <h2 className="sr-only">Contact</h2>

    <div className="row">
      <div className="col-8">
        <form className="content-panel">
          <h3>Write me a message</h3>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="">Message</label>
            <textarea className="form-control" rows="10" placeholder="" />
          </div>

          <button type="submit" className="btn btn-block btn-primary">
            Send
          </button>
        </form>
      </div>

      <div className="col-4 text-center">
        <a href="" className="social-network-link github">
          <span className="social-network-icon fa fa-fw fa-github-alt" />
          <span className="social-network-name">Github</span>
        </a>

        <a href="" className="social-network-link stack-overflow">
          <span className="social-network-icon fa fa-fw fa-stack-overflow" />
          <span className="social-network-name">Stack overflow</span>
        </a>

        <a href="" className="social-network-link linkedin">
          <span className="social-network-icon fa fa-fw fa-linkedin" />
          <span className="social-network-name">LinkedIn</span>
        </a>
      </div>
    </div>
  </section>

export {
  Contact
}
