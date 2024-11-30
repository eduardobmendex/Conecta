import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const CadastroScreen = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    cpfCnpj: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCadastro = () => {
    console.log('Dados cadastrados:', formData);
    // Aqui você pode enviar os dados para um backend
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>VIVA-BEM</Text>
        <Text style={styles.subtitle}>A preservação de nossa dignidade.</Text>
      </View>

      <Title style={styles.title}>Cadastrar</Title>

      <TextInput
        label="Nome"
        value={formData.nome}
        onChangeText={(text) => handleChange('nome', text)}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        value={formData.senha}
        onChangeText={(text) => handleChange('senha', text)}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        label="Telefone"
        value={formData.telefone}
        onChangeText={(text) => handleChange('telefone', text)}
        style={styles.input}
        keyboardType="phone-pad"
      />
      <TextInput
        label="CPF ou CNPJ"
        value={formData.cpfCnpj}
        onChangeText={(text) => handleChange('cpfCnpj', text)}
        style={styles.input}
        keyboardType="numeric"
      />

      <Button
        mode="contained"
        onPress={handleCadastro}
        style={styles.button}
      >
        Cadastrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
  },
});

export default CadastroScreen;