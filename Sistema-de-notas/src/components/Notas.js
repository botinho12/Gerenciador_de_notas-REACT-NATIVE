import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notas({ titulo, descricao, data }) {
  return (
    <View style={styles.nota}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text numberOfLines={1} style={styles.descricao}>{descricao}</Text>
      <Text style={styles.data}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nota: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  descricao: {
    fontSize: 14,
    color: '#555'
  },
  data: {
    fontSize: 12,
    color: '#999',
    marginTop: 5
  },
});
