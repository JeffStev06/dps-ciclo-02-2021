import React, {useState} from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Alert
} from "react-native";
import { Picker } from "@react-native-community/picker";

const Form = ({paises, busqueda, setBusqueda, setConsultar}) => {

  const {pais} = busqueda;
  const [animacionboton] = useState(new Animated.Value(1));

  const consultarPais = () => {
    if (pais.trim() === '') {
      mostrarAlerta();
      return;
    }
    // Llamar API
    setConsultar(true)
  }
  const mostrarAlerta = () => {
    Alert.alert('Error', 'Debe seleccionar un país'), 
    [{Text: 'Entendido'}]
  }

  const animacionEntrada = () => {
    Animated.spring(animacionboton, {
      toValue: .9,
      useNativeDriver: true
    }).start(); 
  }
  const animacionSalida = () => {
    Animated.spring(animacionboton, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  }
  const estiloAnimacion = {
    transform: [{
      scale: animacionboton
    }]
  }

  return (
    <>
      <View>
        <View>
          <Text style={styles.input}> Paises </Text>
        </View>
        <View>
          <Picker
            selectedValue={pais}
            onValueChange={pais=>setBusqueda({...busqueda,pais})}
            style={styles.itempais}
          >
            <Picker.Item label="--seleccione un pais--" value="" />
            {paises.map((pais) =>(
              <Picker.Item key={pais.name} label={pais.name} value={pais.alpha2Code}/>
            ))}
          </Picker>
        </View>
        <TouchableWithoutFeedback
          onPress={()=>consultarPais()}
          onPressIn={()=> animacionEntrada()}
          onPressOut={()=> animacionSalida()}
        >
          <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
            <Text style={styles.textoBuscar}>Buscar País</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  itempais: {
    height: 60,
    backgroundColor: "#fff",
  },
  btnBuscar: {
    marginTop: 50,
    height: 50,
    backgroundColor: "#000",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  textoBuscar: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Form;
