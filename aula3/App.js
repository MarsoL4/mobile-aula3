import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        alignSelf: 'stretch',
        flex: 5,
        backgroundColor: '#f00',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <Text>Bom dia!</Text>
      </View>

      <View style={{
        flex: 5,
        alignSelf: 'stretch', 
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center'
        }}>
        <Text>Turma Fiap!</Text>
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
