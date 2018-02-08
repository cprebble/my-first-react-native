import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Xena extends Component {
  render() {
    return (
      <Image source={require('./resources/Xena.png')} style={{width: 193, height: 110}}/>
    );
  }
}