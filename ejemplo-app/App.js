import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
const imagenCoca = {uri: "./assets/imgs/cocaLogo.png"}
export default function App() {
return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.app}>
      <StatusBar style="light" />
      <View style = {styles.header}>
        <Text style={styles.textHeader}>Login App (Torchinsky, Frankenthal y Paterno)</Text>
      </View>
      <View style = {styles.body}>
        <ImageBackground
          source={imagenCoca}
          resizeMode='cover'>
          <Text>aaaaa</Text>
        </ImageBackground>
      </View>
      <View style = {styles.footer}></View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flexDirection: 'col',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  header:{
    flex: 0.7,
    backgroundColor: 'violet',
    justifyContent: 'center'
  },
  textHeader:{
    textAlign: 'center',
    color: 'snow',
    fontSize: '16'
  },
  body:{
    flex: 5,
    backgroundColor: 'snow'
  },
  footer:{
    flex: 2,
    backgroundColor: 'gray'
  },
});
