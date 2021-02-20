import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    fundo: {
        flex : 1,
        backgroundColor : "#5bc0de",
        alignItems: 'center',
        justifyContent: 'center',
        },
    div : {
        borderRadius : 0,
        backgroundColor : "white",
        width : "100%",
        height : "50%",
        alignItems: 'center',

    },
    logo : {
        resizeMode : 'stretch',
        width : "65%",
        height : "30%",
        marginTop : 15
        
    },
    input : {
        width : "80%",
        height: "12%",
        borderStyle : "solid",
        borderColor : "#e2e2e2",
        borderWidth : 1,
        borderRadius : 10
    },
    corTexto :{
        color : "#5bc0de",
        marginRight : "60%",
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: -6
      
     
    },
    corTextoSenha :{
        color : "#5bc0de",
        marginRight : "60%",
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop: 8
     
    },
    senha : {
        color : "#5bc0de",
        fontSize : 15,
        paddingVertical : 2,
      
       
    },
    button : {
        margin : 10,
        alignItems: 'center',
        borderRadius : 10,
        backgroundColor : "#5cb85c",
        width : "80%",
        height : 40
    },
    buttonText:{
        color : "white",
        paddingTop : 10,
    },
  
    })


export default styles;