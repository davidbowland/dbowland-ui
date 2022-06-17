import React from 'react'

import { ExampleCell, ExampleRow } from './elements'

const SmoothScrollExample = (): JSX.Element => {
  return (
    <>
      <ExampleRow>
        <ExampleCell id="cell1">
          1<br />
          <a data-smooth-scroll-to="#" href="#cell4">
            Down 1
          </a>
          <br />
          <a data-smooth-scroll-to="#" href="#cell7">
            Down 2
          </a>
        </ExampleCell>
        <ExampleCell data-shaded id="cell2">
          2<br />
          <a data-smooth-scroll-duration="3000" data-smooth-scroll-to="#" href="#cell5">
            Down 1, 3 sec
          </a>
          <br />
          <a data-smooth-scroll-to="#" href="#cell7">
            Left 1, Down 2
          </a>
        </ExampleCell>
        <ExampleCell id="cell3">
          3<br />
          <a data-smooth-scroll-to="#" href="#cell1">
            Left 2
          </a>
          <br />
          <a data-smooth-scroll-to="#" href="#cell5">
            Left 1, Down 1
          </a>
        </ExampleCell>
      </ExampleRow>
      <ExampleRow>
        <ExampleCell data-shaded id="cell4">
          4<br />
          <a data-smooth-scroll-duration="3000" href="#cell6">
            Right 2, 3 sec
          </a>
          <br />
          <a href="#cell7">Down 1</a>
        </ExampleCell>
        <ExampleCell id="cell5">
          5<br />
          <a data-smooth-scroll-duration="3000" href="#cell2">
            Up 1, 3 sec
          </a>
          <br />
          <a href="#cell9">Right 1, Down 1</a>
        </ExampleCell>
        <ExampleCell data-shaded id="cell6">
          6<br />
          <a data-smooth-scroll-duration="3000" href="#cell3">
            Up 1, 3 sec
          </a>
          <br />
          <a href="#cell8">Left 1, Down 1</a>
        </ExampleCell>
      </ExampleRow>
      <ExampleRow>
        <ExampleCell id="cell7">
          7<br />
          <button data-smooth-scroll-duration="5000" data-smooth-scroll-to="cell3">
            Up 2, Right 2, 5 sec
          </button>
          <br />
          <button data-smooth-scroll-to="cell9">Right 2</button>
        </ExampleCell>
        <ExampleCell data-shaded id="cell8">
          8<br />
          <button data-smooth-scroll-duration="5000" data-smooth-scroll-to="cell2">
            Up 2, 5 sec
          </button>
          <br />
          <button data-smooth-scroll-to="cell7">Left 1</button>
        </ExampleCell>
        <ExampleCell id="cell9">
          9<br />
          <button data-smooth-scroll-duration="5000" data-smooth-scroll-to="cell4">
            Up 1, Left 2, 5 sec
          </button>
          <br />
          <button data-smooth-scroll-to="cell3">Up 2</button>
        </ExampleCell>
      </ExampleRow>
    </>
  )
}

export default SmoothScrollExample
