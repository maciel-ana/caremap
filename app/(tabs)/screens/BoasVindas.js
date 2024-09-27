import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../index';
import SettingsScreen from '../screens/Welcome';


const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Care
      <Text style={styles.map}>Map</Text>
    </Text>

    <View style={styles.circle}>
      <Text style={styles.welcome}>Bem Vindo ao</Text>
      <Text style={styles.welcome}>CareMap!</Text>
      <View style={styles.line}></View>
      <Text style={styles.textWelcome}>
        Nosso app conecta pacientes {'\n'}
        com doenças raras a hospitais{'\n'}
        especializados de forma fácil.
      </Text>
    <TouchableOpacity style={styles.button} onPress={() => welcome ()}>
      <Icon name="arrow-forward" size={26} color="#000" />
    </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#619C95',
    fontFamily: 'Inter',
  },
  title: {
    alignItems: 'center',
    paddingTop: '20%',
    paddingVertical: 8,
    color: '#226752',
    fontSize: 30,
    fontWeight: 'bold',
  },
  map: {
    color: '#ffffff',
  },
  circle: {
    width: 320, 
    height: 320,
    borderRadius: '200%', 
    backgroundColor: '#ffffff',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: '49%', 
  },
  welcome: {
    color: '#226752',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '2%'
  },
  line: {
    width: '55%',
    height: 1, 
    backgroundColor: 'black',
    marginTop: '3%',
  },
  textWelcome: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: '8%',
    fontWeight: '200',
  },
  button: {
    paddingTop: '5%',
  },
});

export default App; 
