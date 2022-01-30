import React from 'react'

import { ExampleCell, ExampleRow } from './elements'

const SmoothScrollExample = (): JSX.Element => {
  return (
    <>
      <ExampleRow>
        <ExampleCell id="cell1">
          1<br />
          <a href="#cell4" data-smooth-scroll-to="#">
            Down 1
          </a>
          <br />
          <a href="#cell7" data-smooth-scroll-to="#">
            Down 2
          </a>
        </ExampleCell>
        <ExampleCell id="cell2" shaded>
          2<br />
          <a href="#cell5" data-smooth-scroll-to="#" data-smooth-scroll-duration="3000">
            Down 1, 3 sec
          </a>
          <br />
          <a href="#cell7" data-smooth-scroll-to="#">
            Left 1, Down 2
          </a>
        </ExampleCell>
        <ExampleCell id="cell3">
          3<br />
          <a href="#cell1" data-smooth-scroll-to="#">
            Left 2
          </a>
          <br />
          <a href="#cell5" data-smooth-scroll-to="#">
            Left 1, Down 1
          </a>
        </ExampleCell>
      </ExampleRow>
      <ExampleRow>
        <ExampleCell id="cell4" shaded>
          4<br />
          <a href="#cell6" data-smooth-scroll-duration="3000">
            Right 2, 3 sec
          </a>
          <br />
          <a href="#cell7">Down 1</a>
        </ExampleCell>
        <ExampleCell id="cell5">
          5<br />
          <a href="#cell2" data-smooth-scroll-duration="3000">
            Up 1, 3 sec
          </a>
          <br />
          <a href="#cell9">Right 1, Down 1</a>
        </ExampleCell>
        <ExampleCell id="cell6" shaded>
          6<br />
          <a href="#cell3" data-smooth-scroll-duration="3000">
            Up 1, 3 sec
          </a>
          <br />
          <a href="#cell8">Left 1, Down 1</a>
        </ExampleCell>
      </ExampleRow>
      <ExampleRow>
        <ExampleCell id="cell7">
          7<br />
          <button data-smooth-scroll-to="cell3" data-smooth-scroll-duration="5000">
            Up 2, Right 2, 5 sec
          </button>
          <br />
          <button data-smooth-scroll-to="cell9">Right 2</button>
        </ExampleCell>
        <ExampleCell id="cell8" shaded>
          8<br />
          <button data-smooth-scroll-to="cell2" data-smooth-scroll-duration="5000">
            Up 2, 5 sec
          </button>
          <br />
          <button data-smooth-scroll-to="cell7">Left 1</button>
        </ExampleCell>
        <ExampleCell id="cell9">
          9<br />
          <button data-smooth-scroll-to="cell4" data-smooth-scroll-duration="5000">
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
