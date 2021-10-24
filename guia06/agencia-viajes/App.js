import React from 'react';
import { StyleSheet, Image, View, StatusBar, Text, ScrollView } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar />
      <View style={styles.contenedor  }>
        <Image 
          style={styles.banner}
          source={require('./src/img/bg.jpg')}
        />
        <Text>Que hacer en El Salvador</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex:1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  }
});

export default App;