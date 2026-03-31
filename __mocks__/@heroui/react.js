// @heroui/react ships as ESM, which Jest cannot parse because next/jest excludes all of node_modules
// from SWC transformation via transformIgnorePatterns. Rather than polyfilling jsdom with the browser
// APIs HeroUI's real components depend on (ResizeObserver, pointer events, etc.), we use simple
// passthrough elements so tests can verify text content and interactions without fighting the
// test environment. Add a new entry here whenever a HeroUI component is used in a tested component.
const React = require('react')

const passThrough = ({ children, className, ...props }) => React.createElement('div', { className, ...props }, children)

const Accordion = passThrough
const AccordionItem = passThrough
const AccordionHeading = passThrough
const AccordionTrigger = passThrough
const AccordionPanel = passThrough
const AccordionBody = passThrough
const AccordionIndicator = passThrough
const Button = ({ children, onPress, isIconOnly, variant, ...props }) =>
  React.createElement('button', { onClick: onPress, ...props }, children)
const Card = passThrough
const CardContent = passThrough
const CardHeader = passThrough
const Chip = ({ children, ...props }) => React.createElement('span', props, children)
const Link = ({ children, href, target, rel, className, ...props }) =>
  React.createElement('a', { className, href, rel, target, ...props }, children)
const Separator = () => React.createElement('hr')

module.exports = {
  Accordion,
  AccordionBody,
  AccordionHeading,
  AccordionIndicator,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Link,
  Separator,
}
