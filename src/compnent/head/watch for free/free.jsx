import React, { Component } from 'react'
import styles from './free.css'

export default class free extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       on:false
    }
    this.onMouseOver=this.onMouseOver.bind(this);
    this.onMouseOut=this.onMouseOut.bind(this);
  }
  onMouseOver(){
    this.setState({
      on:true
    })
  }
  onMouseOut(){
    this.setState({
      on:false
    })
  }
  
  render() {

    let transform = null;
    const ts= this.state;
    (function(){
      if(ts.on===true){
        transform={
          transform:'scale(1.1)'
        }
      }
    })()
    return (
      <div style={styles}>
        <div className="free" onMouseOver={this.onMouseOver}onMouseOut={this.onMouseOut} style={transform}>
          <a className="free-text">Смотреть кино бесплатно </a>
        </div>
      </div>
    )
  }
}
