import React, { ReactNode } from 'react'

type HeadProps = {
  children?: ReactNode
}

const Head = ({ children }: HeadProps): JSX.Element => {
  React.useEffect(() => {
    // Process title tags
    const titleElements = Array.from(document.head.querySelectorAll('title[data-nextjs]'))
    const newTitles = React.Children.toArray(children).filter(
      (child): child is React.ReactElement => React.isValidElement(child) && child.type === 'title',
    )

    // Remove old titles
    titleElements.forEach((el) => el.remove())

    // Add new titles and set document.title
    newTitles.forEach((titleElement) => {
      const titleText = titleElement.props.children
      if (titleText) {
        document.title = titleText
        const titleEl = document.createElement('title')
        titleEl.setAttribute('data-nextjs', 'true')
        titleEl.textContent = titleText
        document.head.appendChild(titleEl)
      }
    })

    // Also set meta tags, links, etc.
    const otherElements = React.Children.toArray(children).filter(
      (child): child is React.ReactElement =>
        React.isValidElement(child) && ['meta', 'link', 'style', 'script', 'noscript'].includes(String(child.type)),
    )

    otherElements.forEach((element) => {
      const el = document.createElement(String(element.type))
      Object.entries(element.props).forEach(([key, value]) => {
        if (key !== 'children' && key !== 'dangerouslySetInnerHTML') {
          el.setAttribute(key, String(value))
        }
      })
      if (element.props.dangerouslySetInnerHTML) {
        el.innerHTML = element.props.dangerouslySetInnerHTML.__html
      } else if (element.props.children) {
        el.textContent = element.props.children
      }
      document.head.appendChild(el)
    })
  }, [children])

  return <></>
}

export default Head
