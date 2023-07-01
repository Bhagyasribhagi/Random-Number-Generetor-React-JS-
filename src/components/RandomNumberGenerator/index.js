// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGeneretor extends Component {
  state = {Number: 0}

  Genereate = () => {
    const randomNum = Math.ceil(Math.random() * 100)

    this.setState({Number: randomNum})
  }

  render() {
    const {Number} = this.state
    return (
      <div className="bg-con">
        <div className="card-con">
          <h1 className="heading">Random Number</h1>
          <p className="par">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.Genereate}>
            Generate
          </button>
          <p className="para">{Number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGeneretor
