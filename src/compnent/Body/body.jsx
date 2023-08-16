import React, { Component } from 'react'
import styles from './body.css'
import svg from '../head/img/icongh.png'
import { Triangle, BookmarkPlus } from 'lucide-react';

export default class body extends Component {
    constructor(props) {
        super(props)

        this.state = {
            on: false,
            of: false
        }
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOverFloo = this.onMouseOverFloo.bind(this);
        this.onMouseOutFloo = this.onMouseOutFloo.bind(this);
    }
    onMouseOver() {
        this.setState({
            on: true
        })
    }
    onMouseOut() {
        this.setState({
            on: false
        })
    }
    onMouseOverFloo() {
        this.setState({
            of: true
        })
    }
    onMouseOutFloo() {
        this.setState({
            of: false
        })
    }


    render() {
        const point={
            cursor:"pointer"
        }
        let on = null;
        let  transform=null;
        const ts=this.state;
        (function () {
            if (ts.on === true) {
                on = {
                    transform: 'scale(1.1)'
                }
            }
            else{
                on=null
            }
            if(ts.of===true){
                transform = {
                    transform: 'scale(1.1)'
                }
            }
            else{
                transform=null
            }
            
        })()
        const trans = {
            transform: ('rotate(90deg)')
        }
        return (
            <div className='center' style={styles}>
                <div className="imgs">
                    <div className="in">
                        <img src={svg} className='biblio' style={point} />

                        <div className="text-in">
                            <p className='with'>
                                Что, если книга может наделить тебя сверхспособностями? <br></br>Никита Ефремов в фэнтези по культовому роману
                            </p>
                            <p className='with'>В главных ролях:Никита Ефремов, Евгения Дмитриева, Марина <br /> Ворожищева, Михаил Тройник</p>
                            <p className='with'>
                                Режиссер:Игорь Твердохлебов
                            </p>
                        </div>
                        <div className="See">
                            <p className='see-text'>
                                Смотрите по подписке
                            </p>
                            <div className="Look">
                                <div className="Look-id" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style={on} >
                                    <div className="Look-text" style={point}>
                                        <Triangle style={trans} />
                                        <p className='Look-text-tes'>Смотреть</p>
                                    </div>

                                </div>
                                <div className="Watch-add" onMouseOver={this.onMouseOverFloo} onMouseOut={this.onMouseOutFloo} style={transform}>
                                    <div className='ims'style={point}>
                                        <BookmarkPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
