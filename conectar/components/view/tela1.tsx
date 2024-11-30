import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://via.placeholder.com/300' }} // Substitua pela URL da imagem de fundo ou use `require()`
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }} // Substitua pela URL do logotipo
            style={styles.logo}
          />
          <Text style={styles.title}>VIVA-BEM</Text>
          <Text style={styles.subtitle}>A preservação do tesouro digital</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', // Semitransparente
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
});

export default App;