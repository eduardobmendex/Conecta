import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SeguroMonitoramentoScreen = () => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>VIVA-BEM</Text>
        <Text style={styles.subtitle}>A preservação de nossa dignidade.</Text>
      </View>

      <View style={styles.content}>
        <Icon name="office-building" size={80} color="#333" style={styles.icon} />
        <Title style={styles.title}>Seguro-Monitoramento</Title>

        <View style={styles.options}>
          <Button
            icon="chart-bar"
            mode="outlined"
            
            style={styles.optionButton}
            labelStyle={styles.optionText}
          >
            Estatísticas
          </Button>
          <Button
            icon="alert-circle-outline"
            mode="outlined"
           
            style={styles.optionButton}
            labelStyle={styles.optionText}
          >
            Reportar problemas
          </Button>
          <Button
            icon="headset"
            mode="outlined"
          
            style={styles.optionButton}
            labelStyle={styles.optionText}
          >
            Suporte
          </Button>
          <Button
            icon="phone"
            mode="outlined"
           
            style={styles.optionButton}
            labelStyle={styles.optionText}
          >
            Telefones úteis
          </Button>
        </View>

        <Button
          mode="contained"
          
          style={styles.exitButton}
        >
          Sair
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
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
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  options: {
    width: '100%',
    marginBottom: 20,
  },
  optionButton: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  exitButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    width: '100%',
  },
});

export default SeguroMonitoramentoScreen;