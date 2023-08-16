import React, { Component } from 'react';
import img from '../img/pol.png';
import Column from './column/column.jsx';


export default class Pol extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
      isTrue: false,
      counter: 0,
      img: img,
    };

    this.handleClickOn = this.handleClickOn.bind(this);
    this.handleClickfalse = this.handleClickfalse.bind(this);
  }

  handleClickOn() {
    this.setState({
      isTrue: true
    });
  }
  handleClickfalse() {
    this.setState({
      isTrue: false
    });
  }



  componentDidUpdate(prevProps, prevState) {
    if (prevState.isTrue === this.state.isTrue) return;

    if (this.state.isTrue === false) {
      this.setState({
        text: null,

      });
    } else {
      this.setState({
        text: <Column />,

      });
    }

  }


  render() {

    return (
      <div>
        <p onMouseOver={this.handleClickOn} onMouseOut={this.handleClickfalse}> {this.state.text}</p>
        <img src={this.state.img} alt="" onMouseOver={this.handleClickOn} onMouseOut={this.handleClickfalse} />
      </div>
    );
  }
}