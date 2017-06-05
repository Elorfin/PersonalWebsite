import React from 'react'

const About = props =>
  <section>
    <h2 className="sr-only">About</h2>

    <div className="row">
      <div className="col-8">
        <section className="content-panel">
          <h3>About me</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem a erat commodo elementum ac eget nulla. Donec porttitor orci id nibh sollicitudin interdum ut et elit. Quisque diam diam, pretium eu eleifend quis, congue at mi. Quisque at enim ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum elit non magna porta commodo. Mauris convallis ut libero id vulputate. Donec eu blandit odio. Nulla mi lorem, fringilla vitae ultricies cursus, ultricies at turpis. Phasellus nibh lorem, auctor et nunc in, dictum fringilla odio. Aliquam erat volutpat. Fusce feugiat urna diam, nec lacinia massa accumsan ac. Integer sagittis laoreet interdum. Suspendisse feugiat pharetra libero, nec suscipit felis auctor id.
            <br/><br/>
            Etiam molestie vehicula nibh. Donec a sapien et sem cursus congue vel faucibus tortor. Ut et cursus ligula. In in lorem eleifend, condimentum libero in, vulputate nulla. Praesent quis ipsum sit amet leo tristique facilisis. Duis vitae felis odio. Fusce malesuada elementum eros ut placerat. Donec eros libero, bibendum sed dignissim sit amet, interdum a eros. Nam congue venenatis diam eu tristique. Sed molestie non diam ac rutrum. Mauris ut risus nec mauris bibendum luctus.
          </p>
        </section>
      </div>

      <div className="col-4">
        <section className="content-panel">
          <h3>Civility</h3>
        </section>

        <section className="content-panel">
          <h3>Other</h3>
        </section>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <section className="content-panel content-panel-icon">
          <span className="panel-icon fa fa-plus bg-success" />

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
        <section className="content-panel content-panel-icon">
          <span className="panel-icon fa fa-minus bg-danger" />

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

export {
  About
}
