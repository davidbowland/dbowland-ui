import React, { CSSProperties } from 'react'
import { Link } from 'gatsby'

export interface ServerErrorProps {
  children: React.ReactNode
  title: string
}

export const headingStyles: CSSProperties = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 420,
}

export const pageStyles: CSSProperties = {
  color: '#232129',
  padding: '96px',
  fontFamily: 'Roboto, sans-serif, serif',
}

export const paragraphStyles: CSSProperties = {
  marginBottom: 48,
}

const ServerErrorMessage = ({ children, title }: ServerErrorProps): JSX.Element => {
  return (
    <main style={pageStyles}>
      <title>{title} -- dbowland.com</title>
      <h1 style={headingStyles}>{title}</h1>
      <p style={paragraphStyles}>
        {children}
        <br />
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default ServerErrorMessage
