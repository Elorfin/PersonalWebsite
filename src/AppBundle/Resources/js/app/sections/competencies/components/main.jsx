import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'
import { connect } from 'react-redux'

// TODO : do not import the whole namespace
import * as d3 from 'd3'

import { select } from 'main/app/selectors'

function flatten(root) {
  let nodes = []

  function recurse(node) {
    if (node.children) node.children.forEach(recurse)
    nodes.push(node)
  }

  recurse(root)

  return nodes
}

class CompetenciesGraph extends Component {
  constructor(props) {
    super(props)

    this.updateGraph = this.updateGraph.bind(this)
  }

  componentDidMount() {
    this.updateGraph()

    window.addEventListener('resize', this.updateGraph)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateGraph)
  }

  updateGraph() {
    const graph = d3.select(this.graph)

    graph.attr('width', this.container.offsetWidth)

    const sizeModifier = d => 1 + (d.count().value / 10) + (1 / (d.depth + 1))

    const size     = d => 30 * sizeModifier(d)
    const fontSize = d => 8 * sizeModifier(d)

    // get data to display
    let nodes = []
    let links = []
    this.props.competencies.map(competency => {
      const root = d3.hierarchy(competency)

      nodes = nodes.concat(flatten(root))
      links = links.concat(root.links())
    })

    // link data to SVG DOM
    let node = graph.selectAll('.node').data(nodes)
    let link = graph.selectAll('.link').data(links)

    let linkEnter = link.enter()
      .append('line')
      .attr('class', 'link')
      .attr('stroke', link => link.source.data.color[0])
      .attr('stroke-width', link => Math.floor(4 * sizeModifier(link.source)))

    link.exit().remove()

    let nodeEnter = node.enter()
      .append('g')
      .attr('class', 'node')

    nodeEnter
      .append('circle')
      .attr('r', size)
      .attr('fill', d => d.data.color[0])

    nodeEnter
      .append('text')
      .text(d => d.data.name)
      .attr('font-family', 'Century Gothic, Arial')
      .attr('font-size', fontSize)
      .attr('fill', d => d.data.color[1] ? d.data.color[1] : 'black')
      .attr('stroke', d => d.children ? (d.data.color[1] ? d.data.color[1] : 'black') : 'transparent')
      .attr('textLength', d => size(d) * 2 - 30)
      .attr('lengthAdjust', 'spacingAndGlyphs')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'central')

    nodeEnter
      .call(d3.drag()
        .on('start', d => {
          if (!d3.event.active) {
            simulation.alphaTarget(0.3).restart()
          }

          d.fx = d.x
          d.fy = d.y
        })
        .on('drag', d => {
          d.fx = d3.event.x
          d.fy = d3.event.y
        })
        .on('end', d => {
          if (!d3.event.active) {
            simulation.alphaTarget(0)
          }

          d.fx = null
          d.fy = null
        })
      )

    // removes deleted
    node.exit().remove()

    let simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).iterations(5))
      .force('collide',d3.forceCollide(d => size(d) + 2).iterations(5))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(graph.attr('width') / 2, graph.attr('height') / 2))
      .force('y', d3.forceY(0))
      .force('x', d3.forceX(0))
      .on('tick', () => {
        nodeEnter
          .attr('transform', d => {
            // node position is locked inside the SVG bounding box
            d.x = Math.max(size(d), Math.min(graph.attr('width') - size(d), d.x))
            d.y = Math.max(size(d), Math.min(graph.attr('height') - size(d), d.y))

            return `translate(${d.x}, ${d.y})`
          })

        linkEnter
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y)
      })
  }

  render() {
    return (
      <div
        ref={element => this.container = element}
        className="graph-container"
      >
        <svg
          ref={element => this.graph = element}
          className="competencies-graph"
          height={this.props.height}
        />
      </div>
    )
  }
}

CompetenciesGraph.propTypes = {
  height: T.number,
  competencies: T.arrayOf(T.shape({
    id: T.number.isRequired,
    name: T.string.isRequired
  })).isRequired
}

CompetenciesGraph.defaultProps = {
  height: 800
}

const Competencies = props =>
  <section className="container app-section">
    <h2 className="sr-only">Competencies</h2>
    <CompetenciesGraph
      height={800}
      competencies={props.competencies}
    />
  </section>

Competencies.propTypes = {
  competencies: T.array.isRequired
}

const mapStateToProps = state => {
  return {
    competencies: select.competencies(state)
  }
}

const ConnectedCompetencies = connect(mapStateToProps, {})(Competencies)

export {
  ConnectedCompetencies as Competencies
}
