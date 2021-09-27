import React, {useState, useEffect} from 'react';
import { 
  SafeAreaView,
  StyleSheet, 
  StatusBar, 
  Text, 
  View 
} from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Result from './src/components/Result';

export default function App() {
  const [name, setName] = useState(null);
  const [salary, setSalary] = useState(null);
  const [desc, setDesc] = useState({})
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (name && salary) {
      calculate();
    } else {
      reset();
    }
  }, [name,salary]);

  const calculate = () => {
    reset();
    if (!name) {
      setErrorMessage('Nombre requerido');
    } else if (!salary) {
      setErrorMessage('Salario requerido');
    } else {
      const isss = salary * 0.03;
      const afp = salary * 0.04;
      const renta = salary * 0.05;
      setDesc({
        isss: isss,
        afp: afp,
        renta: renta
      });
      
      const neto = salary - isss - afp - renta;
      setTotal(neto);
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
    <StatusBar barStyle='light-content' />
    <SafeAreaView style={styles.Header}>
      <Text style={styles.HeadApp}>Calculador de salario</Text>
      <Form
        setName={setName}
        setSalary={setSalary}
      />
    </SafeAreaView>
    <Result
      name={name}
      salary={salary}
      desc={desc}
      total={total}
      errorMessage={errorMessage}
    />
    </>
  );
}

const styles = StyleSheet.create({
  Header:{
    backgroundColor: colors.PRIMARY_COLOR,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
  },
  HeadApp: {
    fontSize:25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  }
});
