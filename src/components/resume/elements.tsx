import { Link } from 'gatsby'
import styled, { CSSProperties } from 'styled-components'

export const ResumeAnchor = styled.a`
  color: #444;
  transition: all 0.2s ease-in;

  &:hover {
    color: #cf8a05;
  }
`

export const ResumeBody = styled.div`
  padding: 0 40px;

  @media all and (max-width: 480px) {
    padding: 0 25px;
  }
`

export const ResumeContactDetails = styled.div`
  float: right;

  @media all and (max-width: 601px) {
    float: none;
    text-align: center;
    width: 100%;
  }
`

export const ResumeContactDetailsList = styled.ul`
  font-size: 0.9em;
  list-style-type: none;
  margin-top: 2px;
  padding: 0;
`

export const ResumeContactDetailsListItem = styled.li`
  color: #444;
  margin-bottom: 6px;
`

export const ResumeContainer = styled.div`
  color: #222;
  background: #f3f3f3;
  font-family: 'Lato', helvetica, arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin: 0 auto;
  max-width: 1100px;
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

export const ResumeHeadshot = styled.div`
  float: left;
  margin-right: 30px;
  width: 12.5%;

  @media all and (max-width: 800px) {
    display: none;
  }
`

// See bug: https://github.com/gatsbyjs/gatsby/issues/30880
export const ResumeImageStyles: CSSProperties = {
  borderRadius: '50px',
  height: 'auto',
  width: '100%',
}

export const ResumeJobDescription = styled.ul`
  margin: 0;
  padding: 0;
`

export const ResumeJobDescriptionDetail = styled.li`
  margin: 2px 0;
`

export const ResumeKeySkills = styled.ul`
  column-count: 3;
  color: #444;
  font-size: 1em;
  list-style-type: none;
  margin: 0 0 20px 0;
  padding: 0;

  @media all and (min-width: 481px) and (max-width: 800px) {
    column-count: 2;
  }

  @media all and (max-width: 480px) {
    column-count: 1;
  }
`

export const ResumeKeySkillsItem = styled.li`
  margin-bottom: 3px;
`

export const ResumeLink = styled(Link)`
  color: #444;
  transition: all 0.2s ease-in;

  &:hover {
    color: #cf8a05;
  }
`

export const ResumeNameSection = styled.div`
  float: left;

  @media all and (max-width: 601px) {
    float: none;
    text-align: center;
    width: 100%;
  }
`

export const ResumeNameSectionName = styled.h1`
  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
  font-size: 2.5em;
  font-weight: 700;
  margin: 0 0 -6px 0;

  @media all and (max-width: 480px) {
    line-height: 0.8em;
    margin: 0 0 4px 0;
  }
`

export const ResumeNameSectionTitle = styled.h2`
  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
  font-size: 2em;
  margin: 0 0 0 2px;
`

export const ResumeParagraph = styled.p`
  color: #444;
  font-size: 1em;
  line-height: 1.4em;
  margin-bottom: 10px;
`

export const ResumePrimaryDetails = styled.div`
  background: #ededed;
  border-bottom: 2px solid #cf8a05;
  padding: 25px 35px;

  @media all and (max-width: 480px) {
    padding: 15px 15px;
  }
`

export const ResumeSection = styled.section`
  border-top: 1px solid #dedede;
  padding: 20px 0;

  &:first-child {
    border-top: 0;
  }

  &:last-child {
    padding: 20px 0 10px;
  }

  @media all and (max-width: 480px) {
    padding: 15px 0;
  }
`

export const ResumeSectionContent = styled.div`
  float: right;
  width: 72.5%;

  @media all and (max-width: 601px) {
    float: none;
    width: 100%;
  }

  article ~ article {
    margin-top: 1em;
  }
`

export const ResumeSectionContentTitle = styled.h2`
  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  margin: 0 0 4px 0;
`

export const ResumeSectionTitle = styled.div`
  float: left;
  width: 25%;

  @media all and (max-width: 601px) {
    float: none;
    font-size: 1.25em;
    margin-left: -2px;
    width: 100%;
  }
`

export const ResumeSectionTitleHeader = styled.h1`
  color: #cf8a05;
  font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  font-style: italic;
  margin: 0;
`

export const ResultSubDetails = styled(ResumeParagraph)`
  font-size: 0.9em;
  font-style: italic;
  margin: 0 0 4px 0;
`
