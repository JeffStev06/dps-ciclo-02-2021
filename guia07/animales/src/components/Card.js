import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({name, src, origin, description}) => {
  return (
    <View style={styles.card}>
      <Image source={src} alt="imagen raza" style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}> {name} </Text>
        <Text style={styles.origin}> {origin} </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    marginLeft: 10,
    flexDirection: 'column',
    flex: 1
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  origin: {
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 12

  }
})