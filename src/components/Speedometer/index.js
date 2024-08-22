import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => {
        console.log(`previous value ${prevState.speed}`)
        return {speed: prevState.speed + 10}
      })
    }
  }

  applyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        console.log(`previous value ${prevState.speed}`)
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="main-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="img"
            alt="speedometer"
          />
          <h1 className="speed-count">Speed is {speed}mph</h1>
          <p className="instructions">Min Limit is 0mph, Max Limit is 200mph</p>

          <button className="accelerate-btn" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="break-btn" onClick={this.applyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
