import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, StatusBar,
  Text, View, 
  TouchableHighlight, 
  TouchableWithoutFeedback, 
  FlatList, Keyboard
} from 'react-native';

import Form from './src/components/Form';
import Reservation from './src/components/Reservation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from './src/util/colors';

const App = () => {
  const [reservations,setReservations] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const getReservationsStorage = async () => {
      try {
        const resStorage = await AsyncStorage.getItem('reservations')
        if (resStorage) {
          setReservations(JSON.parse(resStorage))
        }
      } catch (error) {
        console.log(error)
      }
    }
    getReservationsStorage()
  }, [])

  const deleteReservation = id => {
    const filteredReservations = reservations.filter( res => res.id !== id )
    setReservations( filteredReservations )
    setReservationsStorage(JSON.stringify(filteredReservations))
  }

  const setReservationsStorage = async (reservationsJSON) => {
    try {
      await AsyncStorage.setItem('reservations', reservationsJSON)
    } catch (error) {
      console.log(error)
    }
  }

  const mostrarForm = () => {
    setShowForm(!showForm)
  }

  const closeKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <>
    <StatusBar />
      <View style={styles.container}>
        <Text style={styles.title}>Reservas</Text>

        <View style={{marginHorizontal: 10, justifyContent: 'center'}}>
          <TouchableHighlight 
            onPress={() => mostrarForm() }
            style={styles.button}>
            <Text style={styles.btnText} >
              { showForm ? 'Cancelar' : 'Agregar una' }
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.body}>
          { showForm ? (
            <>
              <Text style={styles.title}>Crear Nueva Reserva</Text>
              <Form 
                reservations = {reservations}
                setReservations = {setReservations}
                setShowForm = {setShowForm}
                setReservationsStorage = {setReservationsStorage}
              />
            </>
          ) : (
            <>
              <Text style={styles.title}> 
                {reservations.length > 0 ? 'Administra tus citas' : 'Aún no hay reservas'}
              </Text>
              <FlatList
                style={styles.list}
                data={reservations}
                renderItem={ ({item}) => <Reservation item={item} deleteReservation={deleteReservation} />}
                keyExtractor={ reservation => reservation.id }
              />
            </>
          )}
        </View>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND_COLOR,
    justifyContent: 'center',
  },
  body: {
    paddingHorizontal: 10,
    flex: 1
  },
  title: {
    color: '#000',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom:10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  list: {
    flex: 1,
  },
  button: {
    padding: 10,
    backgroundColor: Colors.BUTTON_COLOR,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
  }
});
