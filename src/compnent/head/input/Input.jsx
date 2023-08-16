import React, { Component } from 'react'
import styles from './Input.css'
import SearchIco from './search column/search'
import { Search, Settings2 } from 'lucide-react';

export default class Input extends Component {

  constructor(props) {
    super(props)

    this.state = {
      background: null,
      SearchIco: null,
      on: 0
    }
    this.TrafficColumn = this.TrafficColumn.bind(this);
  }
  TrafficColumn() {
    this.setState({
      on: this.state.on + 1
    });
    if (this.state.on % 2 === 0) {
      this.setState({
        background: 'white',
        SearchIco: <SearchIco />
      })
    }
    else {
      this.setState({
        background: null,
        SearchIco: null,
      })
    }
  }


  render() {
    const { background } = this.state;
    return (
      <div style={styles} >
        <div onClick={this.TrafficColumn} className='InputDiv' style={{ background }}>

          <input className='Input'
            type="text"
            placeholder='Фильмы, сериалы, персоны'

          />
          <div className="icons">
            <Settings2 className='icon' color='#d0d0d0' />
            < Search className='icon' color='#d0d0d0' />
          </div>
        </div>
        <dir>
          {this.state.SearchIco}
        </dir>
      </div>
    )
  }
}
