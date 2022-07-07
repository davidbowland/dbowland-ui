import styled, { CSSProperties } from 'styled-components'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export const ProjectDetails = styled(Stack)`
  flex-grow: 2;
  text-align: left;
`

export const ProjectHeader = styled(Typography)`
  color: #cf8a05;
  flex-basis: 180px;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0.5em;
`

// See bug: https://github.com/gatsbyjs/gatsby/issues/30880
export const ProjectImageStyles: CSSProperties = {
  margin: '1em 2em',
  maxHeight: '300px',
}
