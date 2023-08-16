import React, { Component } from 'react'
import img1 from '../../head/img/kino.webp';
import img2 from '../../head/img/kino2.webp';
import img3 from '../../head/img/kino3.webp';
import img4 from '../../head/img/kino4.webp';
import img5 from '../../head/img/kino5.webp';
import styles from './MovieTickets.css'
import Flickity from 'react-flickity-component';

const kino = {
    id: [1, 2, 3, 4, 5],
    title: ['kino', 'kino2', 'kino3', 'kino4', 'kino5'],
    image: [img1, img2, img3, img4, img5]
};

const flickityOn = {
    initialIndex: 2,
    wrapAround: false
};

export default class MovieTickets extends Component {
    render() {
        const plateStyle = {
            margin: '5rem'
        };
        return (
            <div style={styles}>
                <p>Билеты в кино</p>
                <Flickity className='slider' options={flickityOn}>
                    {kino.id.map((index) => {
                        return (
                            <div key={index} className='Plate' style={plateStyle}>
                                <div
                                    style={{
                                        backgroundImage: `url(${kino.image[index - 1]})`,
                                        width: '275%',
                                        height: 300
                                    }}
                                />
                            </div>
                        );
                    })}
                </Flickity>
            </div>
        )
    }
}
