import React, { Component } from 'react'
import styles from './Onlain.css'

export default class Onlain extends Component {
    render() {
        return (
            <div style={styles} className='flex'>
                <div className='Onlain' />
                <div className='Onlain-text'>
                    Онлайн-кинотеатр
                </div>
            </div>
        )
    }
}
