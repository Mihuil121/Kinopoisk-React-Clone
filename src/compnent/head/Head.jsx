import kino from './img/soccer.svg'
import styles from './Head.css'
import Onlain from './Onlain/Onlain'
import RPL from './RPL//RPL'
import React, { Component } from 'react'
import Inputt from './input/Input'
import Free from './watch for free/free'
import Pol from './pol/pol'
import ThreeDots from './ThreeDots'


export default class Head extends Component {
  
  render() {
    
    return (
      <div >
        <div style={styles} className='unification'>
          <ThreeDots/>
          <img src={kino}
            alt="kino"
            href='/'
            className='kino left' />
          <div className='unification'>
            <div className="left">
              <Onlain />
            </div>
            <div className="left">
              <RPL />
            </div>
            <div className="left">
              <Inputt />
            </div>
            <div className="left">
              <Free />
            </div>
            <div className="left">
              <Pol />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
