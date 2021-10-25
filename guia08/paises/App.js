import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';

import Form from './src/components/Form'
import Pais from './src/components/Pais'

export default function App() {
  const [paises, setPaises] = useState([])
  const [busqueda, setBusqueda] = useState({
    pais: ''
  })
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({})  

  useEffect(() => {
    const cargarPaises = async () => {
      const url = 'https://restcountries.com/v2/all';
      try {
        const resp = await fetch(url)
        const resultado = await resp.json()

        setPaises(resultado)
      } catch (error) {
        mostrarAlerta('Hubo un problema en cargar los países');
      }
    };
    cargarPaises()
  }, [])

  useEffect(() => {
    const { pais } = busqueda;
    const consultarPais = async () => {
      if (consultar) {
        const url = `https://restcountries.com/v2/alpha/${pais}`;
        try {
          const resp = await fetch(url)
          const resultado = await resp.json()

          setResultado(resultado)
          setConsultar(false)
        } catch (error) {
          mostrarAlerta('No hay resulado intenta con otra ciudad o pais');
        }
      }
    };
    consultarPais()
  }, [consultar]);

  const mostrarAlerta = (mensaje) => {
    Alert.alert('Error', mensaje),
    [{ Text: 'Ok'}]
  }

  return (
    <View>
      <Form
        paises={paises}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        setConsultar={setConsultar}
      />
      <Pais resultado={resultado} />
    </View>
  );
}
