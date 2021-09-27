import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Result(props) {
  const {name, salary, desc, total, errorMessage} = props;

  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult title="Asalariado:" value={name} />
          <DataResult title="Salario Base:" value={`- $ ${salary}`} />
          <View style={styles.divider} />
          <DataResult title="ISSS :" value={`- $ ${desc.isss}`} />
          <DataResult title="AFP  :" value={`- $ ${desc.afp}`} />
          <DataResult title="Renta:" value={`- $ ${desc.renta}`} />
          <DataResult title="Salario Neto:" value={`$ ${total}`} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}
function DataResult(props) {
  const {title, value} = props;
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  divider: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    marginBottom: 10
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
});