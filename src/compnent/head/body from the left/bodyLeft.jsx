import React, { Component } from 'react'
import { Home, Play, RectangleHorizontal, SquareDashedBottom, Circle, Ticket, CassetteTape } from 'lucide-react';
import styles from './bodyLeft.css'

export default class bodyLeft extends Component {
    render() {
        return (
            <div style={styles}>
                <div className="general">
                    <div className="whitespace">
                        <div className="picture-text">
                            <Home className='color bottom-underscores' />
                            <p className='text the-main-text-only'>Главная</p>
                        </div>
                        <div className="picture-text">
                            <Play className='color'/>
                            <p className='text'>Онлайн-кинотеатр</p>
                        </div>
                        <div className="picture-text">
                            <RectangleHorizontal className='color'/>
                            <p className='text'>Фильмы</p>
                        </div>
                        <div className="picture-text">
                            <SquareDashedBottom className='color' />
                            <p className='text'>Сериалы</p>
                        </div>
                        <div className="picture-text">
                            <Circle className='color'/>
                            <p className='text'>Спорт</p>
                        </div>
                        <div className="picture-text">
                            <Ticket className='color'/>
                            <p className='text'>Билеты в кино</p>
                        </div>
                        <div className="picture-text">
                            <CassetteTape className='color'/>
                            <p className='text'>Медиа</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
