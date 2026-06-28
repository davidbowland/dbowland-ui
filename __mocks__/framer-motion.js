const React = require('react')

const createMotionComponent = (tag) => {
  const Component = ({
    children,
    animate,
    initial,
    variants,
    transition,
    custom,
    whileHover,
    whileTap,
    whileInView,
    viewport,
    ...props
  }) => React.createElement(tag, props, children)
  Component.displayName = `motion.${tag}`
  return Component
}

const motion = new Proxy(
  {},
  {
    get(target, prop) {
      if (!(prop in target)) {
        target[prop] = createMotionComponent(prop)
      }
      return target[prop]
    },
  },
)

const AnimatePresence = ({ children }) => children

module.exports = { motion, AnimatePresence }
