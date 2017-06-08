/*
 * Maze generation using the "Recursive backtracker" algorithm
 *
 * @see https://en.wikipedia.org/wiki/Maze_generation_algorithm
 */

// used to determine neighbours and walls position
import {
  NORTH,
  EAST,
  SOUTH,
  WEST
} from './../constants'
import { isInGrid } from './../utils'

let
  grid,
  cells,
  totalCells,
  visited,
  totalVisited

/**
 * Gets a random position in the grid.
 *
 * @return {Array}
 */
const randomGridPosition = () => [Math.floor(Math.random()*grid[0]), Math.floor(Math.random()*grid[1])]

/**
 * Checks whether a cell is in the grid range.
 *
 * @param {Array} cellPosition - [X, Y]
 *
 * @return {bool}
 */
const isCell = cellPosition => isInGrid(grid[0], grid[1], cellPosition)

/**
 * Checks whether a cell has already been visited.
 *
 * @param {Array} cellPosition - [X, Y]
 *
 * @return {bool}
 */
const isVisited = cellPosition => visited[cellPosition[0]][cellPosition[1]]

/**
 * Marks a cell as visited.
 *
 * @param {Array} cellPosition - [X, Y]
 */
const markVisited = cellPosition => {
  visited[cellPosition[0]][cellPosition[1]] = true
  totalVisited++
}

/**
 * Gets a cell's direct neighbours.
 * NB. a neighbour can be out of the grid.
 *
 * @param cellPosition
 */
const getNeighbours = cellPosition => [
  // north
  [cellPosition[0], cellPosition[1]-1,   NORTH],
  // east
  [cellPosition[0]+1,   cellPosition[1], EAST],
  // south
  [cellPosition[0], cellPosition[1]+1,   SOUTH],
  // west
  [cellPosition[0]-1,   cellPosition[1], WEST]
]

/**
 * Gets a random unvisited cell's neighbour.
 *
 * @param {Array} currentPosition - [X, Y]
 *
 * @returns {Array|null}
 */
const getRandomNeighbour = currentPosition => {
  // get non visited neighbours
  const neighbours = getNeighbours(currentPosition).filter(cell => isCell(cell) && !isVisited(cell))

  // choose a random one
  return 0 !== neighbours.length ? neighbours[Math.floor(Math.random()*neighbours.length)] : null
}

const openWalls = (cell, neighbour) => {
  switch (neighbour[2]) {
    case NORTH:
      cells[cell[0]][cell[1]][NORTH] = 1
      cells[neighbour[0]][neighbour[1]][SOUTH] = 1
      break;
    case EAST:
      cells[cell[0]][cell[1]][EAST] = 1
      cells[neighbour[0]][neighbour[1]][WEST] = 1
      break;
    case SOUTH:
      cells[cell[0]][cell[1]][SOUTH] = 1
      cells[neighbour[0]][neighbour[1]][NORTH] = 1
      break;
    case WEST:
      cells[cell[0]][cell[1]][WEST] = 1
      cells[neighbour[0]][neighbour[1]][EAST] = 1
      break;
  }
}

/**
 * Initializes maze generation vars.
 *
 * @param {number} width
 * @param {number} height
 */
const init = (width, height) => {
  grid = [width, height]
  cells = []
  totalCells = width * height
  visited = []
  totalVisited = 0
}

/**
 * Generate maze grid.
 *
 * @param {number} width
 * @param {number} height
 *
 * @return {array}
 */
export function generate(width = 10, height = 10) {
  // reinitialize grid vars
  init(width, height)

  // generate cells grid (row by row)
  for (let x = 0; x < width; x++) {
    cells[x] = []
    visited[x] = []

    for (let y = 0; y < height; y++) {
      // by default all cells are fully closed (walls on each side)
      // we will open them lately
      cells[x][y] = [0, 0, 0, 0]

      // initialize the visited array to simplify further calculations
      visited[x][y] = false
    }
  }

  // get a random cell to start from
  let currentCell = randomGridPosition()
  markVisited(currentCell)

  // store the current path to be able to rewind the position when we reach a leaf
  let currentPath = [currentCell]

  while (totalVisited < totalCells) {
    const next = getRandomNeighbour(currentCell)
    if (next) {
      markVisited(next)

      // open walls
      openWalls(currentCell, next)

      // got to the cell
      currentPath.push(next)
      currentCell = next
    } else {
      // Go back to find another branch
      currentCell = currentPath.pop()
    }
  }

  return cells
}
