import styled from 'styled-components'

export const ExampleCell = styled.div`
  display: table-cell;
  background-color: ${(props: any) => (props.shaded ? '#d3d3d3' : '#fff')};
  padding-top: 2.5em;
  text-align: center;
`

export const ExampleRow = styled.div`
  display: table;
  height: 100vh;
  table-layout: fixed;
  width: 300vh;
`
