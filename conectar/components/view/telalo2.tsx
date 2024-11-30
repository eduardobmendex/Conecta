import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/80x80.png' }} // Substitua pelo logotipo real
          style={styles.logo}
        />
        <Text style={styles.title}>VIVA-BEM</Text>
        <Text style={styles.subtitle}>A preservação do nosso equilíbrio</Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>
          Olá! Seja bem-vindo ao aplicativo Viva-Bem, nossa plataforma de
          monitoramento e coleta de dados. Com o Viva-Bem, você terá acesso
          rápido a informações importantes sobre a sua conta, facilitando o
          acompanhamento do desempenho e progresso. Estamos aqui para ajudar a
          tornar sua experiência ainda mais completa e eficiente. Aproveite ao
          máximo todas as funcionalidades que nosso aplicativo oferece!
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Empresa</Text>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }} // Substitua com ícone de empresa
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comunidade</Text>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }} // Substitua com ícone de comunidade
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  descriptionContainer: {
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    color: '#333',
    textAlign: 'justify',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    marginRight: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default App;
