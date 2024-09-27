import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Care
      <Text style={styles.map}>Map</Text>
    </Text>
  <Image 
    source={require('../../../assets/images/doctors.png')}
    style={styles.image}
  />
    <View style={styles.circle}>
      <Text style={styles.textWelcome}>
        Utilize nossa ferramenta de{'\n'}
        localização e tenha acesso a{'\n'}
        informações detalhadas em{'\n'}
        poucos cliques.
      </Text>
    <TouchableOpacity style={styles.button} onPress={() => conta()}>
        <Text style={styles.text}>COMEÇAR</Text>
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
  image: {
    position: 'absolute',
    width: '50%',
    height: '30%',
    marginTop: '50%',
    zIndex: 1
  },
  circle: {
    width: 320, 
    height: 320,
    borderRadius: '200%', 
    backgroundColor: '#ffffff',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: '55%', 
  },
  textWelcome: {
    color: '#000000',
    fontSize: 19,
    textAlign: 'center',
    paddingTop: '16%',
    fontWeight: '300',
  },
  button: {
    borderWidth: 1,
    borderColor: '#226752', 
    borderRadius: 20, 
    paddingVertical: 10, 
    paddingHorizontal: 30, 
    backgroundColor: '#fff', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, 
    marginTop: '10%'
  },
});

export default App;
