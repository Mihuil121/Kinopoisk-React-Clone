import React, { Component, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../head/img/kino.webp';
import img2 from '../../head/img/kino2.webp';
import img3 from '../../head/img/kino3.webp';
import img4 from '../../head/img/kino4.webp';
import img5 from '../../head/img/kino5.webp';
import styles from './Slider.css';
import Flickity from 'react-flickity-component';


const flickityOn = {
  initialIndex: 2,
  wrapAround: false
};

const point={
  cursor: "pointer"
}

const months = {
  1: 'Январь',
  2: 'Февраль',
  3: 'Март', 
  4: 'Апрель',
  5: 'Май',
  6: 'Июнь',
  7: 'Июль',
  8: 'Август',
  9: 'Сентябрь',
  10: 'Октябрь',
  11: 'Ноябрь',
  12: 'Декабрь'
};

const kino = {
  id: [1, 2, 3, 4, 5],
  title: ['kino', 'kino2', 'kino3', 'kino4', 'kino5'],
  image: [img1, img2, img3, img4, img5]
};

export default function Slider() {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(months[new Date().getMonth() + 1]);
  }, []);

  const plateStyle = {
    margin: '5rem'
  };

  return (
    <div className={styles.slider}style={point}>
      <p className='text-slider'>Что посмотреть в {text}</p>
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
  );
}