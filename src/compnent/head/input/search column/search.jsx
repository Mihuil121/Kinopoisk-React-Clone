import React, { Component } from 'react'
import styles from './search.css'
import img from '../../img/i.webp'

export default class search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            const: <div className="g">
                <div className="main" href='/'>
                    <img src={img} className='picture' />
                    <div className="blok">
                        <p className='nutrition-unit'>Пищеблок</p>
                        <div className="main-text">
                            <p className='estimation'>7,4 </p>
                            <p className="movie-or-TV-series">cериал,</p>
                            <p className='date'> 2021 г.</p>
                        </div>
                    </div>
                </div>
            </div>
        }
    }

    render() {
        const text = this.state.const
        
        return (
            <div className='search-column'>
                <div className="top" style={styles}>
                    <p>Входит в топ 10 за месяц</p>
                </div>
                {text}{text}{text}{text}{text}{text}{text}{text}
            </div >
        )
    }
}
