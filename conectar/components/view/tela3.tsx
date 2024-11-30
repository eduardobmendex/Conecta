import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  CheckBox,
} from 'react-native';

const App = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      {/* Cabeçalho com Logo */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/80x80.png' }} // Substitua pela URL ou imagem local
          style={styles.logo}
        />
        <Text style={styles.title}>VIVA-BEM</Text>
        <Text style={styles.subtitle}>A preservação do nosso equilíbrio</Text>
      </View>

      {/* Campos de Entrada */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Usuário ou Email:</Text>
        <TextInput
          placeholder="Digite seu usuário"
          style={styles.input}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Opções de Lembrar-me e Esqueci Senha */}
      <View style={styles.optionsContainer}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text style={styles.checkboxLabel}>Lembrar-me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Entrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
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
    fontSize: 14,
    color: 'gray',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  forgotPassword: {
    color: '#4A90E2',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;