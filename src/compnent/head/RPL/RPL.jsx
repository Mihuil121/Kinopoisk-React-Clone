import React, { Component } from 'react'
import ball from '../img/ballsvg.svg'
import styles from './RPL.css'

export default class RPL extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: null,
      on: false
    }
    this.OnMouseEnter = this.OnMouseEnter.bind(this);
    this.onMouseOver=this.onMouseOver.bind(this)
  }
  OnMouseEnter() {
    this.setState({
      on: true
    })
  }

  onMouseOver() {
    this.setState({
      on: false
    })
  }

  componentDidUpdate(prevState) {
    if (prevState.on !== this.state.on) return;
    if (this.state.on === true) {
      this.setState({
        color: "black"
      })

    }
    else {
      this.setState({
        color: null
      })
    }

  }

  render() {
    const color = this.state.color
    return (
      <div style={styles} className='RPL-ball-flex' onMouseOver={this.onMouseOver} onMouseOut={this.OnMouseEnter} >
        <img src={ball} className="ball" style={{ color }} />
        <div className="text-RPL">
          РПЛ. Новый сезон
        </div>
      </div>
    )
  }
}
