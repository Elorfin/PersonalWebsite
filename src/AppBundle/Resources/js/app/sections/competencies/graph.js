/**
 * Styles accessor for the competency nodes.
 *
 * @type {object}
 */
const Node = {}

Node.color = d => d.data.color[1] ? d.data.color[1] : 'black'

Node.background = d => d.data.color[0] ? d.data.color[0] : 'grey'

Node.sizeModifier = d => 1 + (d.count().value / 10) + (1 / (d.depth + 1))

Node.border = d => d.data.version ? Node.background(d.parent) : 'transparent'
Node.borderWidth = d => d.data.version ? 3 : 0

Node.padding = d => d.data.version ? 10 : 15

Node.size = (d, withBorder = false) => (!d.data.version ? 27 * Node.sizeModifier(d) : 10) + (withBorder ? Node.borderWidth(d) : 0)

Node.fontSize = d => !d.data.version ? 8 * Node.sizeModifier(d) : 12

Node.linkSize = d => Math.floor(4 * Node.sizeModifier(d))

Node.collide = d => Node.size(d, true) * 1.25

Node.hasIcon = d => !!d.data.icon

export {
  Node
}
