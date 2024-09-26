import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import welcome from './Welcome';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Care
      <Text style={styles.map}>Map</Text>
    </Text>

    <View style={styles.circle}>
      {/* <Imagem>

      </Imagem> */}
      <Text style={styles.textWelcome}>
        Utilize nossa ferramenta de{'\n'}
        localização e tenha acesso a{'\n'}
        informações detalhadas em
        poucos cliques.
      </Text>
    <TouchableOpacity style={styles.button} onPress={() => conta()}>
        <Text style={styles.text}>Começar</Text>
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
    borderRadius: '100%', 
    backgroundColor: '#ffffff',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: '30%', 
  },
  welcome: {
    color: '#226752',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter',
    paddingTop: '5%'
  },
  care: {
    textAlign: 'center',
    fontFamily: 'Inter',
    padding: 4,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  line: {
    width: '55%',
    height: 1, 
    backgroundColor: 'black',
    marginTop: 13,
  },
  textWelcome: {
    color: '#000000',
    fontFamily: 'Inter',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '300',
  },
  button: {
    paddingTop: '10%',
  },
});

export default App;
