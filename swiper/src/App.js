import './App.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    list: ['1111', '2222', '3333', '4444', '5555'],
  };
  render() {
    return (
      <div>
        <div class='swiper'>
          <div class='swiper-wrapper'>
            <div class='swiper-slide'>Slide 1</div>
            <div class='swiper-slide'>Slide 2</div>
            <div class='swiper-slide'>Slide 3</div>
          </div>
          <div class='swiper-pagination'></div>

          <div class='swiper-button-prev'></div>
          <div class='swiper-button-next'></div>

          <div class='swiper-scrollbar'></div>
        </div>
      </div>
    );
  }
}
