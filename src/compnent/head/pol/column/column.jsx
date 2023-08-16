import React, { Component } from 'react'
import styles from './column.css'
import img from '../../img/pol.png'
import ico from '../../img/ico.png';
import plus from '../../img/4105962-add-expand-plus_113920.png';

export default class column extends Component {
    
    render() {
        const point ={
            cursor: 'pointer'
        }
        return (
            <div style={styles}>
                <div className="ghg" >
                    <div className="registrLine">
                        <div >
                            <div className="name" style={point}>
                                Иван
                            </div>
                            <div className="account" style={point}>
                                dew.com@ela
                            </div>
                        </div>
                        <img src={img} alt="" className='img' />
                    </div>
                    <div className="indent-Content"style={point}>
                        <div className="invitation-Content">
                            <div className="invitation-ico">
                                <img src={ico} className="invitation-icon" />
                                <p className='invitation-text'>Пригласить в семью</p>
                            </div>
                        </div>
                    </div>
                    <div className="strip " ></div>
                    <div className="bands"style={point} >
                        <div className="text-i">
                            <div className="left-comp">
                                <p className='invitation-text'>Оценки</p>
                            </div>
                        </div>
                    </div>
                    <div className="bands"style={point} >
                        <div className="text-i">
                            <div className="left-comp">
                                <p className='invitation-text'>Фильмы</p>
                            </div>
                        </div>
                    </div>
                    <div className="bands" style={point}>
                        <div className="text-i">
                            <div className="left-comp">
                                <p className='invitation-text'>Персоны </p>
                            </div>
                        </div>
                    </div>
                    <div className="bands" style={point}>
                        <div className="text-i">
                            <div className="left-comp">
                                <p className='invitation-text'>Друзья</p>
                            </div>
                        </div>
                    </div>
                    <div className="bands" style={point}>
                        <div className="text-i">
                            <div className="left-comp">
                                <p className='invitation-text'>Сообщения</p>
                            </div>
                        </div>
                    </div>
                    <div className="retreat" style={point}></div>
                    <div className="bands" >
                        <div className="text-i">
                            <div className="left-comp">
                                <p className='invitation-text'>Активация промокодa</p>
                            </div>
                        </div>
                    </div>
                    <div className="bands" style={point}>
                        <div className="text-i">
                            <div className="left-comp">
                                <p className='invitation-text'>Настройки</p>
                            </div>
                        </div>
                    </div>
                    <div className="bands" style={point}>
                        <div className="text-i">
                            <div className="left-comp">
                                <p className='invitation-text'>Чат с поддержкой</p>
                            </div>
                        </div>
                    </div>
                    <div className="bands" style={point}>
                        <div className="text-i">
                            <div className="left-comp">
                                <p className='invitation-text'>Формальности</p>
                            </div>
                        </div>
                    </div>
                    <div className="bands" style={point}>
                        <div className="text-i">
                            <div className="left-comp">
                                <p className='invitation-text'>Выйти</p>
                            </div>
                        </div>
                    </div>
                    <div className="retreat"></div>
                    <div className="strip"></div>
                    <div className="indent-Content" style={point}>
                        <div className="invitation-Content">
                            <div className="invitation-ico">
                                <img src={plus} className="invitation-icon" />
                                <p className='invitation-text'> Добавить аккаунт </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
