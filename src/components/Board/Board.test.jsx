import React from 'react'
import { shallow } from 'enzyme'

import Board from './index'

describe(Board, () => {
  it('has an grid of boardSize x boardsize', () => {
    const board = shallow(<Board boardSize={9} />)
    const grid  = board.state('grid')
    expect(grid.length).toEqual(9)
    grid.forEach((row) => {
      expect(row.length).toEqual(9)
    })
  })
})
