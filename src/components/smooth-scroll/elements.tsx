import React from 'react'

export interface ExampleCellProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-shaded'?: boolean
}

export const ExampleCell = ({ 'data-shaded': shaded, className, ...props }: ExampleCellProps): React.JSX.Element => (
  <div
    {...props}
    className={`table-cell ${shaded ? 'bg-[#d3d3d3]' : 'bg-white'} pt-10 text-center text-black ${className ?? ''}`}
  />
)

export const ExampleRow = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => (
  <div {...props} className={`table h-screen [table-layout:fixed] w-[300vh] ${className ?? ''}`} />
)
