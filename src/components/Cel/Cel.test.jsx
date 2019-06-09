import React from 'react'
import Cel from './Cel'

describe(Cel, () => {
  it('shows alive or dead in the className', () => {
    const aliveNode = shallow(<Cel alive={true} />)
    const deadNode = shallow(<Cel alive={false} />)
  })
})
