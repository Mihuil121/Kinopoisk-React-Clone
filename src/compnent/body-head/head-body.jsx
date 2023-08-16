import React, { Component } from 'react'
import Body from '../Body/body'
import HeadBody from './HeadBody.css'
import Slider from '../Body/slider/Slider'
import MovieTickets from '../Body/Movie tickets/MovieTickets'

export default class headBody extends Component {
  render() {
    return (
      <div className='body-div' style={HeadBody}>
        <Body />
        <Slider />
      </div>
    )
  }
}
