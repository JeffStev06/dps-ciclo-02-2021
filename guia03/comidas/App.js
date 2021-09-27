import React from 'react';
import {
  ScrollView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card} from 'react-native-elements';

const foods = [
  {
    id: 1,
    name: 'Pupusa',
    source: require('./src/images/comida-pupusas.jpg'),
    description:
      'Las pupusas son el platillo más representativo de la cocina salvadoreña. Son como tortillas parecidas a las gorditas mexicanas pero más gruesas y elaboradas tanto con maíz o arroz, ingredientes con los que se prepara la masa.',
  },
  {
    id: 2,
    name: 'Tamales de Elote',
    source: require('./src/images/comida-tamales.jpg'),
    description:
      'Los tamales no solo forman parte de las comidas típicas de El salvador, también están entre los platillos típicos de México y de otros países centroamericanos.',
  },
  {
    id: 3,
    name: 'Atol de elote',
    source: require('./src/images/comida-atol-elote.jpg'),
    description:
      'Los atoles son una de las comidas típicas de El Salvador y los hay de diversos tipos. Son espesos y se toman calientes.',
  },
  {
    id: 4,
    name: 'Empanadas',
    source: require('./src/images/comida-empanadas.jpg'),
    description:
      'Las empanadas se elaboran con una masa hecha a partir de un puré de plátanos maduros, con la que se hacen tortillas redondeadas y rellenas con frijoles molidos, que luego se fríen en abundante aceite.',
  },
  {
    id: 5,
    name: 'Empanadas',
    source: require('./src/images/comida-riguas.jpg'),
    description:
      'Pese a ser un platillo típico de El Salvador, es uno de los menos conocidos. Son tortas fritas hechas con masa de elotes condimentada y envueltas en hojas de elote o plátano. Se comen con queso y crema.',
  },
  {
    id: 6,
    name: 'Elotes locos',
    source: require('./src/images/comida-elotes-locos.jpg'),
    description:
      'Los elotes siempre están presentes en la cocina salvadoreña; en este caso se trata de elotes locos, otra comida típica de El Salvador.',
  },
];

const Comida = ({name, src, desc}) => {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Divider />
      <Card.Image source={src} />
      <Text>{desc}</Text>
    </Card>
  );
};

const App = () => {
  return (
    <>
      <StatusBar />
      <View style={styles.header}>
        <Text style={styles.title}>Comidas típicas</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={foods}
          renderItem={({item}) => (
            <Comida
              name={item.name}
              src={item.source}
              desc={item.description}
            />
          )}
          keyExtractor={food => food.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  title: {
    alignItems: 'center',
    fontSize: 24,
  },
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  list: {
    color: '#000',
    marginBottom: 20,
  },
});

export default App;
