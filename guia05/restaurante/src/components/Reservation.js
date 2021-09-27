import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import Colors from '../util/colors';

const Cita = ({item, deleteReservation}) => {
    
    const remove = id => {
        console.log('eliminando....', id);
        deleteReservation(id);
    }

    return (
        <View style={styles.reservation}>
            <View>
                <Text style={styles.label}>Nombre: </Text>
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.label}>Fecha y Hora: </Text>
                <Text style={styles.text}>{item.date} {item.time}</Text>
            </View>
            <View>
                <Text style={styles.label}>Cantidad de personas: </Text>
                <Text style={styles.text}>{item.number}</Text>
            </View>
            <View>
                <Text style={styles.label}>Área: </Text>
                <Text style={styles.text}>{item.smokingArea ? 'Fumadores' : 'No Fumadores' }</Text>
            </View>
            <View>
                <TouchableHighlight 
                    onPress={ () => remove(item.id) }
                    style={styles.btnEliminar}
                >
                    <Text style={styles.textEliminar}> Eliminar &times; </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reservation: {
        backgroundColor: Colors.PRIMARY_COLOR,
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginVertical:5,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    text: {
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'coral',
        marginVertical: 10
    },
    textEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Cita;