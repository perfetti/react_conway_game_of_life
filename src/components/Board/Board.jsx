import React from 'react'
import Cel from 'components/Cel/Cel'
import { getNeighbors } from 'helpers/helpers'

export default class Board extends React.Component {

  constructor({boardSize}) {
    super()
    this.state = {
      grid: this.buildInitialState(boardSize)
    }
  }

  componentDidMount() {
    this.intervalStep()
  }

  intervalStep = () => {
    this.step()
    setTimeout(() => {
      this.intervalStep()
    }, 2500)
  }

  step = () => {
    const { grid } = this.state
    const newGrid = grid.map((row, y) => {
      return row.map((alive, x) => {
        const neighborCount = getNeighbors(x, y, grid).reduce((a, b) => a+b, 0)
        if(neighborCount < 2 || neighborCount > 3) {
          return 0
        } else if(neighborCount == 3) {
          return 1
        } else {
          return alive
        }
      })
    })

    this.setState({grid: newGrid})
  }

  buildInitialState(boardSize) {
    const arr = []
    for(let i=0;i<boardSize;i++){
      arr[i] = []
      for(let j=0;j<boardSize;j++){
        arr[i][j] = (Math.random() > 0.5) ? 1 : 0
      }
    }
    return arr
  }

  render() {
    const { grid } = this.state

    return (
      <div onClick={this.step} className="board">
        <button className="stepperButton">STEP</button>
        {grid.map((row, indexI) =>
          <div key={indexI} className="row">
            {row.map((alive, indexJ) => <Cel key={indexJ} alive={alive} />)}
          </div>
        )}
      </div>
    )
  }
}
// <div className="row">
//   <Cel alive={true} />
//   <Cel alive={false} />
// </div>
// <div className="row">
//   <Cel alive={false} />
//   <Cel alive={true} />
// </div>
