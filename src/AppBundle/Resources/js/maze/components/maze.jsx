import React, { Component } from 'react'
import { PropTypes as T } from 'prop-types'

import { generate } from './../generator/recursive-backtracker'
import {
  NORTH,
  EAST,
  SOUTH,
  WEST,
  keysBinding,
  isInGrid
} from './../utils'

class MazeStructure extends Component {
  componentDidMount() {
    this.context = this.canvas.getContext('2d')
    this.draw()
  }

  drawWall(x, y, door = false) {
    if (1 === door) {
      // just move cursor
      this.context.moveTo(x, y)
    } else {
      // draw wall
      this.context.lineTo(x, y)
    }
  }

  /**
   *
   * @param {Array} position - X, Y coordinates of the cell in the maze
   * @param {Array} doors    - North, East, South, West doors of the cell (0: no door, 1: door)
   */
  drawCell(position = [0, 0], doors = [0, 0, 0, 0]) {
    const cellSize = this.props.cellSize
    const wallSize = this.props.wallSize

    this.context.beginPath()

    // start at top left corner
    const currentPos = [
      (position[0] * cellSize) + (wallSize / 2),
      (position[1] * cellSize) + (wallSize / 2)
    ]

    // start drawing in the top left corner
    this.context.moveTo(currentPos[0], currentPos[1])

    // go to top right corner
    this.drawWall(currentPos[0] + cellSize, currentPos[1], doors[0])

    // go to bottom right corner
    this.drawWall(currentPos[0] + cellSize, currentPos[1] + cellSize, doors[1])

    // go to bottom left corner
    this.drawWall(currentPos[0], currentPos[1] + cellSize, doors[2])

    // go back to top left corner
    this.drawWall(currentPos[0], currentPos[1], doors[3] || (0 === position[0] && 0 === position[1]))

    this.context.stroke()
    this.context.closePath()
  }

  draw() {
    this.context.strokeStyle = this.props.wallColor
    this.context.lineWidth = this.props.wallSize
    this.context.lineJoin = 'miter'
    this.context.lineCap = 'square'

    for (let x = 0; x < this.props.width; x++) {
      for (let y = 0; y < this.props.height; y++) {
        this.drawCell([x, y], this.props.cells[x][y])
      }
    }
  }

  render() {
    return (
      <canvas
        className="maze"
        width={this.props.wallSize + (this.props.width * this.props.cellSize)}
        height={this.props.wallSize + (this.props.height * this.props.cellSize)}
        ref={(canvas) => { this.canvas = canvas }}
      />
    )
  }
}

MazeStructure.propTypes = {
  width: T.number.isRequired,
  height: T.number.isRequired,
  cellSize: T.number.isRequired,
  wallSize: T.number.isRequired,
  wallColor: T.string.isRequired,
  cells: T.arrayOf(T.array).isRequired
}

class UserPath extends Component {
  componentDidMount() {
    this.context = this.canvas.getContext('2d')

    this.width = this.props.wallSize + (this.props.width * this.props.cellSize)
    this.height = this.props.wallSize + (this.props.height * this.props.cellSize)

    this.draw()
  }

  componentDidUpdate() {
    this.draw(true)
  }

  draw(clear = false) {
    if (clear) {
      this.context.clearRect(0, 0, this.width, this.height)
    }

    const halfCell = this.props.cellSize / 2
    const visited = []

    // draw path
    this.context.beginPath()
    this.props.path.map((visitedCell, index) => {
      this.context.setLineDash([4, 2])

      const visitedPos = [
        (visitedCell[0] * this.props.cellSize) + (this.props.wallSize / 2) + halfCell,
        (visitedCell[1] * this.props.cellSize) + (this.props.wallSize / 2) + halfCell
      ]
      visited.push(visitedPos)

      if (0 === index) {
        this.context.moveTo(visitedPos[0], visitedPos[1])
      } else {
        this.context.lineTo(visitedPos[0], visitedPos[1])
      }
    })

    this.context.strokeStyle = this.props.userColor
    this.context.lineWidth = 2
    this.context.stroke()
    this.context.closePath()

    // draw dots
    visited.map((cell, index) => {
      const currentPos = index === visited.length - 1

      this.context.beginPath()

      this.context.setLineDash([])
      this.context.arc(
        cell[0],
        cell[1],
        currentPos ? 6 : 3,
        0,
        2 * Math.PI,
        false
      )

      if (currentPos) {
        // current user position
        this.context.fillStyle = this.props.userColor
        this.context.fill()
      } else {
        this.context.strokeStyle = this.props.userColor
        this.context.lineWidth = 2
        this.context.fillStyle = '#F4F4F4'
        this.context.fill()
        this.context.stroke()
      }

      this.context.closePath()
    })
  }

  render() {
    return (
      <canvas
        className="user-path"
        width={this.width}
        height={this.height}
        ref={(canvas) => { this.canvas = canvas }}
      />
    )
  }
}

UserPath.propTypes = {
  width: T.number.isRequired,
  height: T.number.isRequired,
  cellSize: T.number.isRequired,
  wallSize: T.number.isRequired,
  path: T.arrayOf(
    T.arrayOf(
      T.number
    )
  ).isRequired,
  userColor: T.string.isRequired
}

class Maze extends Component {
  constructor(props) {
    super(props)

    // generate a new maze
    this.cells = generate(this.props.width, this.props.height)

    // put the player at the start of the maze
    this.state = {
      currentPath: [
        [0, 0]
      ]
    }

    this.goTo = this.goTo.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', function (e) {
      e = e || window.event
      if (keysBinding[e.which || e.keyCode] || 0 === keysBinding[e.which || e.keyCode]) {
        this.goTo(keysBinding[e.which || e.keyCode])
        e.preventDefault()
      }
    }.bind(this))
  }

  goTo(direction) {
    const currentCell = this.state.currentPath[this.state.currentPath.length-1]

    // Check if there is a door in the requested direction
    const cellConfig = this.cells[currentCell[0]][currentCell[1]]
    if (cellConfig[direction]) {
      let nextCell = null
      switch (direction) {
        case NORTH:
          nextCell = [currentCell[0], currentCell[1]-1]
          break
        case EAST:
          nextCell = [currentCell[0]+1, currentCell[1]]
          break
        case SOUTH:
          nextCell = [currentCell[0], currentCell[1]+1]
          break
        case WEST:
          nextCell = [currentCell[0]-1, currentCell[1]]
          break
      }

      // check if the destination is still in the grid
      if (nextCell && isInGrid(this.props.width, this.props.height, nextCell)) {
        const previousCell = this.state.currentPath[this.state.currentPath.length-2]
        const newPath = this.state.currentPath.slice()
        if (previousCell && nextCell[0] === previousCell[0] && nextCell[1] === previousCell[1]) {
          // user is going back
          newPath.pop()
        } else {
          // user is going forward
          newPath.push(nextCell)
        }

        this.setState({
          currentPath: newPath
        })
      }
    }
  }

  render() {
    return (
      <div className="maze-container">
        <button className="maze-control north" onClick={() => this.goTo(NORTH)}>
          <span className="fa fa-caret-up" />
          <span className="sr-only">North</span>
        </button>
        <button className="maze-control east" onClick={() => this.goTo(EAST)}>
          <span className="fa fa-caret-right" />
          <span className="sr-only">East</span>
        </button>
        <button className="maze-control south" onClick={() => this.goTo(SOUTH)}>
          <span className="fa fa-caret-down" />
          <span className="sr-only">South</span>
        </button>
        <button className="maze-control west" onClick={() => this.goTo(WEST)}>
          <span className="fa fa-caret-left" />
          <span className="sr-only">West</span>
        </button>

        <MazeStructure {...this.props} cells={this.cells} />
        <UserPath {...this.props} path={this.state.currentPath} />
      </div>
    )
  }
}

Maze.propTypes = {
  width: T.number,
  height: T.number,
  cellSize: T.number,
  wallSize: T.number,
  wallColor: T.string,
  userColor: T.string
}

Maze.defaultProps = {
  height: 15,
  width: 15,
  cellSize: 20,
  wallSize: 4,
  wallColor: '#000000',
  userColor: '#D64C00'
}

export {
  Maze
}
