import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { editarRepositorio } from '../../services/requisicoes/repositorios';
import { deletarRepositorio } from '../../services/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [postId, setPostId] = useState('');
    const [id, setId] = useState('');

    useEffect(async() => {
        const { item } = await route.params;
        
        console.log(item); 

        setNome(item.name);
        setData(item.data);
        setPostId(item.postId);
        setId(item.id);
    },[])

    async function editar(){
        const response = await editarRepositorio(nome,data,postId,id);

        if(response){
            Alert.alert('Repositório editado com sucesso!');
            navigation.goBack();
        }
        else{
            Alert.alert('Erro ao editar repositório!');
        }
    }

    async function deletar(){
        const response = await deletarRepositorio(id);

        if(response){
            Alert.alert('Repositório deletado com sucesso!');
            navigation.goBack();
        }
        else{
            Alert.alert('Erro ao deletar repositório!');
        }
    }



    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao} 
                onPress={() =>editar()}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]}
                onPress={() => deletar()} 
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
