// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  genrateRandomNumber = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
    console.log(Math.ceil(Math.random() * 100))
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-card">
        <div className="random-card">
          <h1 className="random-heading">Random Number</h1>
          <p className="random-text">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="btn-card">
            <button
              className="random-btn"
              onClick={this.genrateRandomNumber}
              type="button"
            >
              Generate
            </button>
          </div>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
