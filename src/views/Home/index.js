import React from 'react';
import { Text ,View, TouchableOpacity, Button, Image} from 'react-native';
import styles from './styles';
import logo from '../../assets/logo2.png';

function Home({navigation}){

   
   
  return (
    <View style={styles.caixa}>     
    
    <Image style={styles.logo} source={logo} width='25%' height='25%'></Image>


        <View> 
        <Text style={styles.titulo}>Seja Bem vindx!!</Text>
     
        <Text style={styles.texto2}>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</Text>
          
          

        </View>

        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Produtos')}}>
            <Text style={styles.texto}>Ir para Produtos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Login')}}>
            <Text style={styles.texto}>Ir para Login</Text>
          </TouchableOpacity>
        
    </View>
  )
  
}
export default Home;
