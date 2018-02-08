import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Bananas from './bananas';
import Xena from './xena';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Bananas />
        <Xena />
        <Image source={require('./resources/WonderWoman.png')} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
