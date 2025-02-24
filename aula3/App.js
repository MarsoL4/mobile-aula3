import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width: 100, height: 100,
         backgroundColor: '#f00',
         alignItems: 'center',
         justifyContent: 'center'}}>
        <Text style={{alignItems:'center', justifyContent: 'center'}}>Bom dia!</Text>
      </View>

      <View style={{width: 200, height: 200, 
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <Text style={{alignItems:'center', justifyContent: 'center'}}>Turma Fiap!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
