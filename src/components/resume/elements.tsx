import styled, { CSSProperties } from 'styled-components'
import { Link } from 'gatsby'

export const ResumeAnchor = styled.a`
  transition: all 0.2s ease-in;

  &:hover {
    color: #cf8a05;
  }
`

export const ResumeContactDetailsList = styled.ul`
  font-size: 0.9em;
  list-style-type: none;
  margin-top: 2px;
  padding: 0;
`

export const ResumeContactDetailsListItem = styled.li`
  margin-bottom: 6px;
`

export const ResumeContainer = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 0 auto;
  width: 90%;

  @media all and (max-width: 601px) {
    margin: 10px auto;
    min-width: 280px;
    width: 95%;
  }

  @media print {
    width: 100%;
  }
`

export const ResumeDownloadHeader = styled.h4`
  margin: 10px 0;

  @media all and (max-width: 601px) {
    margin: 20px 0;
  }
`

// See bug: https://github.com/gatsbyjs/gatsby/issues/30880
export const ResumeImageStyles: CSSProperties = {
  borderRadius: '25px',
  height: 'auto',
  maxWidth: '10em',
  width: '100%',
}

export const ResumeJobDescription = styled.ul`
  margin: 0;
  padding: 0;
`

export const ResumeJobDescriptionDetail = styled.li`
  margin: 2px 0;
`

export const ResumeLink = styled(Link)`
  transition: all 0.2s ease-in;

  &:hover {
    color: #cf8a05;
  }
`

export const ResumeNameSectionName = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  margin: 0 0 -6px 0;

  @media all and (max-width: 480px) {
    line-height: 0.8em;
    margin: 0 0 4px 0;
  }
`

export const ResumeNameSectionTitle = styled.h2`
  font-size: 2em;
  margin: 0 0 0 2px;
`

export const ResumeParagraph = styled.p`
  font-size: 1em;
  line-height: 1.4em;
  margin-bottom: 10px;
`

export const ResumeSectionContentTitle = styled.h2`
  font-size: 1.5em;
  margin: 0 0 4px 0;
`

export const ResumeSectionTitleHeader = styled.h1`
  color: #cf8a05;
  font-size: 1.5em;
  font-style: italic;
  margin: 0 0.5em;
`

export const ResultSubDetails = styled(ResumeParagraph)`
  font-size: 0.9em;
  font-style: italic;
  margin: 1em 0;
`
