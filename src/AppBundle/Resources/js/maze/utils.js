
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
