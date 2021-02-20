import React from 'react';
import { Text, View, TextInput, TouchableOpacity,  } from 'react-native';


import style from './styles';

export default function Login ({navigation}){
    return(
        <View style={style.fundo}>
           
        
            <View style={style.div}>  
            <Text style={style.corTexto}></Text>   
            <Text style={style.corTexto}></Text>   
     
                <Text style={style.corTexto}>Email : </Text>
                <TextInput style={style.input}>
                
                </TextInput>

                <Text style={style.corTextoSenha} >Senha : </Text>
                <TextInput style={style.input} secureTextEntry={true}>

                </TextInput>

                <TouchableOpacity style={style.button} onPress={()=>{navigation.navigate('Home')}}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <Text style={style.senha}>Esqueceu a senha ? </Text>

               <TouchableOpacity >
                    <Text style={style.senha}>Ainda não tem uma conta ? Clique aqui! </Text>
               </TouchableOpacity>
                
            </View>
        </View>
    )
}

