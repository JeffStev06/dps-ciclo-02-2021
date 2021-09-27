import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {Picker} from '@react-native-picker/picker';
import shortid from 'shortid';
import colors from '../util/colors';

const Form = ({reservations, setReservations, setShowForm, setReservationsStorage}) => {
    //variables para el formulario
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [smokingArea, setSmokingArea] = useState(false);
    const [date, setDate] = useState('Seleccione Fecha');
    const [time, setTime] = useState('Seleccione Hora');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const confirmDate = date => {
        const options = { year: 'numeric', month: 'long', day: '2-digit' }
        setDate(date.toLocaleDateString('es-ES', options))
        hideDatePicker()
    }    

    const showTimePicker = () => {
        setTimePickerVisibility(true)
    }
    const hideTimePicker = () => {
        setTimePickerVisibility(false)
    }
    const confirmTime = hora => {
        setTime(new Date(hora).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true}))
        hideTimePicker()
    }

    const createNewReservation = () => {
        if (name.trim() === '' || number.trim() === '' ||
            date.trim() === '' || time.trim() === '') {
            
            showError()
            return
        }
        const reservation = { name, number, smokingArea, date, time }
        reservation.id = shortid.generate()

        const newReservation = [...reservations, reservation]
        setReservations(newReservation)
        
        setReservationsStorage(JSON.stringify(newReservation))

        setShowForm(false)

        setName('')
        setNumber('')
        setSmokingArea(false)
        setDate('')
        setTime('')
    }

    const showError = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'OK'
            }]
        )
    }

    return (
        <View style={StyleSheet.formulario}>
        <ScrollView>
            <View>
                <Text style={styles.label}>Nombre:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ texto => setName(texto) }
                />
            </View>
            <View>
                <Text style={styles.label}>Cantidad de personas:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ texto => setNumber(texto) }
                />
            </View>
            <View>
                <Text style={styles.label}>Tipo de sección:</Text>
                <Picker
                    selectedValue={smokingArea}
                    style={styles.input}
                    onValueChange={(itemValue,itemIndex) => setSmokingArea(itemValue)}
                >
                    <Picker.Item label="Área de NO fumadores" value={false} />
                    <Picker.Item label="Área de fumadores" value={true} />
                </Picker>
            </View>
            <View>
                <Text style={styles.label}>Fecha:</Text>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={confirmDate}
                    onCancel={hideDatePicker}
                    locale='es_ES'
                    headerTextIOS="Elige la fecha"
                    cancelTextIOS="Cancelar"
                    confirmTextIOS="Confirmar"
                />
                <Text
                    style={styles.inputDate}
                    onPress={showDatePicker} 
                >
                    {date}
                </Text>
            </View>
            <View>
                <Text style={styles.label}>Hora:</Text>
                <DateTimePickerModal
                    isVisible={isTimePickerVisible}
                    mode="time"
                    onConfirm={confirmTime}
                    onCancel={hideTimePicker}
                    locale='es_ES'
                    headerTextIOS='Elige una Hora'
                    cancelTextIOS='Cancelar'
                    confirmTextIOS='Confirmar'
                />
                
                <Text
                    style={styles.inputDate}
                    onPress={showTimePicker} 
                >
                    {time}
                </Text>
            </View>
            

            <View>
                <TouchableHighlight 
                    onPress={ () => createNewReservation() }
                    style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}>Crear Reservación</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    formulario: {
        paddingVertical: 10,
        flex: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        paddingHorizontal: 10,
        height: 40,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    inputDate: {
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 10,
        height: 40,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor:colors.BUTTON_COLOR,
        borderRadius: 5,
        marginVertical: 10
    },
    textoSubmit: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Form