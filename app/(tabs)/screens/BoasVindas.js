import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Welcome from './Welcome';

const Stack = createStackNavigator();

const App = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Care
      <Text style={styles.map}>Map</Text>
    </Text>

    <View style={styles.circle}>
      <Text style={styles.welcome}>
        Bem Vindo ao{'\n'}
        <Text style={styles.care}>CareMap!</Text>
      </Text>

      <View style={styles.line} />

      <Text style={styles.textWelcome}>
        Nosso app conecta pacientes{'\n'}
        com doenças raras a hospitais{'\n'}
        especializados de forma fácil.
      </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
      <Icon name="chevron-right" size={20} color="#000000" style={styles.icon} />
    </TouchableOpacity>
    </View>
  </View>
);

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
