import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Care
      <Text style={styles.map}>Map</Text>
      </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#619C95',
  },
  title: {
    textAlign: 'center',
    alignItems: 'center',
    paddingTop: '95%',
    paddingVertical: 8,
    color: '#226752',
    fontSize: 30,
    fontWeight: 'bold',
  },
  map: {
    color: '#ffffff',
  }
});

export default App;