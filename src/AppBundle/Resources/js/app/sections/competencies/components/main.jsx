import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'
import { connect } from 'react-redux'
import random from 'lodash/random'

// TODO : do not import the whole namespace
import * as d3 from 'd3'

import { select } from 'main/app/selectors'

import { actions } from './../actions'
import { Node } from './../graph'

function flatten(root) {
  let nodes = []

  function recurse(node) {
    if (node.children) node.children.forEach(recurse)
    nodes.push(node)
  }

  recurse(root)

  return nodes
}

const isCollapsed = (node, expandedNodes) => {
  if (node.parent) {
    return -1 !== expandedNodes.indexOf(node.parent.data.id) || isCollapsed(node.parent, expandedNodes)
  }

  return false
}

const filterCollapsedNodes = expandedNodes => node => !isCollapsed(node, expandedNodes)
const filterCollapsedLinks = expandedNodes => link => !isCollapsed(link.target, expandedNodes)

class CompetenciesGraph extends Component {
  constructor(props) {
    super(props)

    let nodes = []
    let links = []
    this.props.competencies.map(competency => {
      const root = d3.hierarchy(competency)

      nodes = nodes.concat(flatten(root))
      links = links.concat(root.links())
    })

    this.state = {
      nodes: nodes, // competency nodes to display in the graph
      links: links, // links between competencies
      expandedNodes: []
    }

    this.updateGraph = this.updateGraph.bind(this)
    this.resize = this.resize.bind(this)
  }

  componentDidMount() {
    // initialize D3 library
    this.d3Graph = d3.select(this.graph)

    this.resize(false)
    this.updateGraph()

    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize(update = true) {
    this.d3Graph.attr('width', this.container.offsetWidth)
    if (update) {
      this.updateGraph()
    }
  }

  updateGraph() {
    // link data to SVG DOM
    let node = this.d3Graph.selectAll('.node').data(this.state.nodes.filter(filterCollapsedNodes(this.state.expandedNodes)))
    let link = this.d3Graph.selectAll('.link').data(this.state.links.filter(filterCollapsedLinks(this.state.expandedNodes)))

    let linkEnter = link.enter()
      .append('path')
      /*.attr("d", "M0,-5L10,0L0,5")*/
      /*.attr("d", d3.line().curve(d3.curveLinear))*/
      .attr('class', 'link')
      .attr('stroke', link => Node.background(link.source))
      .attr('stroke-width', link => Node.linkSize(link.source))
      .attr('fill', 'none')

    link.exit().remove()

    let nodeEnter = node.enter()
      .append('g')
      .attr('class', 'node')
      .on('click', d => {
        this.props.openCompetency(d.data.id)
      })
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

    // Bubble
    nodeEnter
      .append('circle')
      .attr('r', Node.size)
      .attr('fill', Node.background)
      .attr('stroke', Node.border)
      .attr('stroke-width', Node.borderWidth)

    // Bubble content
    const nodeText = nodeEnter
      .append('g')

    // Bubble icon
    nodeText
      .filter(d => !!d.data.icon)
      .append('text')
      .text(d => d.data.icon ? d.data.icon : null)
      .attr('font-family', 'FontAwesome')
      .attr('font-size', d => Node.size(d)*2 / 3)
      .attr('fill', Node.color)
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'baseline')


    // Bubble text
    nodeText
      .append('text')
      .text(d => d.data.name)
      .attr('font-family', 'Century Gothic, Arial')
      .attr('font-size', Node.fontSize)
      .attr('fill', Node.color)
      //.attr('stroke', d => d.children ? Node.color(d): 'transparent')
      .attr('textLength', d => Node.size(d) * 2 - Node.padding(d) * 2) // padding of 15px between text and circle border
      .attr('lengthAdjust', 'spacingAndGlyphs')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', d => Node.hasIcon(d) ? 'hanging' : 'central')
      .attr('y', d => Node.hasIcon(d) ? Node.padding(d) : 0)

    // removes deleted
    node.exit().remove()

    let simulation = d3.forceSimulation(this.state.nodes)
      .force('link', d3.forceLink(this.state.links).iterations(5))
      .force('collide',d3.forceCollide(Node.collide).iterations(5))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(this.d3Graph.attr('width') / 2, this.d3Graph.attr('height') / 2))
      .force('y', d3.forceY(0))
      .force('x', d3.forceX(0))
      .on('tick', () => {
        nodeEnter
          .attr('transform', d => {
            const nodeSize = Node.size(d, true)

            // node position is locked inside the SVG bounding box
            d.x = Math.max(nodeSize, Math.min(this.d3Graph.attr('width') - nodeSize, d.x))
            d.y = Math.max(nodeSize, Math.min(this.d3Graph.attr('height') - nodeSize, d.y))

            return `translate(${d.x}, ${d.y})`
          })

        linkEnter
          // line
          /*.attr('d', d => `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`)*/
          // bezier
          .attr('d', d => {
            let deltaX = random(Math.min(d.source.x, d.target.x), Math.max(d.source.x, d.target.x), true)
            let deltaY = random(Math.min(d.source.y, d.target.y), Math.max(d.source.y, d.target.y), true)

            return `M${d.source.x},${d.source.y} Q${deltaX+random(-30, 30)},${deltaY+random(-30, 30)} ${d.target.x},${d.target.y}`
          })
      })
  }

  render() {
    return (
      <div
        ref={element => this.container = element}
        className="graph-container"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          ref={element => this.graph = element}
          className="competencies-graph"
          height={this.props.height}
          textRendering="optimizeLegibility"
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
  })).isRequired,
  openCompetency: T.func.isRequired
}

CompetenciesGraph.defaultProps = {
  height: 920
}

const Competencies = props =>
  <section className="container app-section">
    <h2 className="sr-only">Competencies</h2>
    <CompetenciesGraph
      competencies={props.competencies}
      openCompetency={props.openCompetency}
    />
  </section>

Competencies.propTypes = {
  competencies: T.array.isRequired,
  openCompetency: T.func.isRequired
}

const mapStateToProps = state => {
  return {
    competencies: select.competencies(state)
  }
}

const mapDispathToProps = dispatch => {
  return {
    openCompetency(id) {
      dispatch(actions.openCompetency(id))
    }
  }
}

const ConnectedCompetencies = connect(mapStateToProps, mapDispathToProps)(Competencies)

export {
  ConnectedCompetencies as Competencies
}
