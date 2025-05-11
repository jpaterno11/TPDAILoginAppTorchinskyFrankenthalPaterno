import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput } from 'react-native';
const imagenCoca = require('./assets/imgs/cocaLogo.png');
export default function App() {
  const [nombre, handleNombreChange] = React.useState(``)
  const [contrasena, setContrasena] = React.useState('');
  const handleContrasenaChange = (text) => {
    setContrasena(text);
  };
return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.app}>
      <StatusBar style="light" />
      <View style = {styles.header}>
        <Text style={styles.textHeader}>Login App (Torchinsky, Frankenthal y Paterno)</Text>
      </View>
      <View style = {styles.body}>
      <ImageBackground
        style= {styles.image}
        source={imagenCoca}
        resizeMode='contain'>
      </ImageBackground>
      <View style = {styles.form}>
        <TextInput
        style = {styles.input}
        placeholder='Ingrese su email'
        onChangeText={handleNombreChange}
        value={nombre}
        />
        <TextInput
        style = {styles.input}
        placeholder='Ingrese su contraseña'
        onChangeText={handleContrasenaChange}
        value={contrasena.replace(/./g, '★')}
        />
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => alert('¡Botón presionado!')}
      >
        <Text style={styles.buttonText}>INGRESAR</Text>
      </Pressable>
      <Text style={styles.text}>Olvidaste la clave?</Text>
      <Text style={styles.text}>Crear Cuenta</Text>
    </View>
      </View>
      </View>
      <View style = {styles.footer}>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flexDirection: 'col',
    flex: 1,
    backgroundColor: 'snow',
    justifyContent: 'center'
  },
  header:{
    flex: 0.3,
    backgroundColor: 'violet',
    justifyContent: 'center'
  },
  textHeader:{
    textAlign: 'center',
    color: 'snow',
    fontSize: 18
  },
  footer:{
    flex: 0.5,
    backgroundColor: 'violet'
  },
  image:{
    flex: 2.5,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body:{
    flex: 3,
  },
  form:{
    flex: 3,
    margin: 15,
  },
  input:{
    marginTop: 10,
    height: 50,
    borderWidth: 2,
    padding: 1, 
    borderColor: 'violet',
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: `center`,
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'violet',
    paddingHorizontal: 143,
    paddingVertical: 16,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  text:{
    marginTop: 15,
    fontSize: 16
  }
});
