
export const NORTH = 0
export const EAST  = 1
export const SOUTH = 2
export const WEST  = 3

export const KEY_MOVE_NORTH = 38 // arrow up
export const KEY_MOVE_EAST  = 39 // arrow east
export const KEY_MOVE_SOUTH = 40 // arrow down
export const KEY_MOVE_WEST  = 37 // arrow left

export const keysBinding = {
  [KEY_MOVE_NORTH]: NORTH,
  [KEY_MOVE_EAST]:  EAST,
  [KEY_MOVE_SOUTH]: SOUTH,
  [KEY_MOVE_WEST]:  WEST
}

/**
 * Checks whether a cell is in the grid range.
 *
 * @param {number} gridWidth
 * @param {number} gridHeight
 * @param {Array}  cellPosition - [X, Y]
 *
 * @return {bool}
 */
export const isInGrid = (gridWidth, gridHeight, cellPosition) =>
  cellPosition[0] >= 0 && cellPosition[0] < gridWidth && // horizontal axis
  cellPosition[1] >= 0 && cellPosition[1] < gridHeight // vertical axis
