import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ApagarNota({ onDelete }) {
    return (
        <View style={styles.ladoDireito}>
            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.botaoExcluir}>🗑️</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    ladoDireito: {
        backgroundColor: '#ff4d4d',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20,
        borderRadius: 8,
        height: 90,
    },
    botaoExcluir: {
        color: '#fff',
        fontSize: 24,
        marginLeft: 'auto'
    },
});
