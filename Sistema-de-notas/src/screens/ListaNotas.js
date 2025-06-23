import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { View } from 'react-native';

import todayImagem from '../../assets/img/login.jpg'
import Notas from '../components/Notas';
import ApagarNota from '../components/ApagarNota';

export default function ListaNotas() {
    const [notas, setNotas] = useState([
        {
            id: '1',
            titulo: 'Comprar materiais',
            descricao: 'Comprar canetas, caderno e borracha.',
            data: '10/06/2025',
        },
        {
            id: '2',
            titulo: 'Estudar PAM II',
            descricao: 'Ler slides e revisar códigos de exemplo.',
            data: '15/06/2025',
        },
        {
            id: '3',
            titulo: 'Reunião com grupo',
            descricao: 'Discutir projeto final e dividir tarefas.',
            data: '18/06/2025',
        },
        {
            id: '4',
            titulo: 'Teste do TCC',
            descricao: 'Testa as ferramentas do site para ver se esta tudo funcionado.',
            data: '30/06/2025',
        },
        {
            id: '5',
            titulo: 'Apresentação do TCC',
            descricao: 'Apresentar o projeto de finalização de curso (TCC).',
            data: '01/07/2025',
        },
        {
            id: '6',
            titulo: 'Entregar Trabalho do val',
            descricao: 'Entregar o App de Notas.',
            data: '25/06/2025',
        },
    ]);

    const removerNota = (id) => {
        setNotas(notas.filter((nota) => nota.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.tituloApp}>Minhas Notas</Text>
            <ImageBackground source={todayImagem} style={styles.background}></ImageBackground>
            <SwipeListView
                data={notas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 10 }}>
                        <Notas
                            titulo={item.titulo}
                            descricao={item.descricao}
                            data={item.data}
                        />
                    </View>
                )}
                renderHiddenItem={({ item }, rowMap) => (
                    <ApagarNota
                        onDelete={() => {
                            rowMap[item.id]?.closeRow(); 
                            removerNota(item.id);        
                        }}
                    />
                )}
                rightOpenValue={-75}
                disableRightSwipe
                contentContainerStyle={{ paddingBottom: 20 }}
            />
            <StatusBar style="auto" />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 16,
        backgroundColor: '#fff'
    },
    tituloApp: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center'
    },
    background: {
        flex: 5
    }
});
