import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={viewComStyle}>
        <Text>Bom dia!</Text>
      </View>

      <View style={view2ComStyle}>
        <Text>Turma Fiap!</Text>
      </View>
    </View>
  );
}

const viewComStyle ={
  alignSelf: 'stretch', //Ocupe todo os espaço
  flex: 5, // seja 50% da tela
  backgroundColor: '#f00', //mudando a cor
  alignItems: 'center', //alinhando os itens
  justifyContent: 'center' // centralizando o conteúdo
}

const view2ComStyle = {
  flex: '5',
  alignSelf: 'stretch',
  backgroundColor: 'skyblue',
  alignItems: 'center',
  justifyContent: 'center'
}

const meuStyle = {
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const styles = StyleSheet.create(meuStyle);
