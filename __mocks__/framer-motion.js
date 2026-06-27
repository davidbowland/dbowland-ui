const React = require('react')

// Pass-through mock that strips all animation props so jsdom doesn't crash
const createMotionComponent = (tag) => {
  const Component = ({ children, initial, animate, variants, whileInView, viewport, transition, ...rest }) =>
    React.createElement(tag, rest, children)
  Component.displayName = `motion.${tag}`
  return Component
}

const handler = { get: (_, tag) => createMotionComponent(tag) }
const motion = new Proxy({}, handler)

const AnimatePresence = ({ children }) => children

module.exports = { motion, AnimatePresence }
