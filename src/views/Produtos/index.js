import React from 'react';
import { Text ,View, TouchableOpacity, Button} from 'react-native';
import styles from './styles';
import ProdutoLista from '../../components/ProdutoLista';


function Home({navigation}){

   
   
  return (
    <View style={styles.caixa}>     

        <ProdutoLista />
    </View>
  )
  
}
export default Home;
