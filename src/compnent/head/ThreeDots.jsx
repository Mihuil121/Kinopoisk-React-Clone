import React, { Component } from 'react'
import { AlignJustify} from 'lucide-react';
import stylees from './Head.css'
import BodyLeft from './body from the left/bodyLeft'


export default class ThreeDots extends Component {
  render() {
    return (
      <div style={stylees}>
        <AlignJustify className='three-stripes'/>
        <BodyLeft/>
      </div>
    )
  }
}
