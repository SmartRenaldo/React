import React, { Component } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './App.css';
Swiper.use([Navigation, Pagination]);

export default class App extends Component {
  state = {
    list: ['1111', '2222', '3333', '4444', '5555'],
  };

  componentDidMount() {
    new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  render() {
    return (
      <div>
        <div
          className='swiper'
          style={{ height: '200px', background: 'yellow' }}
        >
          <div className='swiper-wrapper'>
            {this.state.list.map((item) => (
              <div className='swiper-slide' key={item}>
                {item}
              </div>
            ))}
          </div>

          <div className='swiper-pagination'></div>
        </div>
      </div>
    );
  }
}
