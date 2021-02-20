import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Styles from './styles';
import ProdutosCard from './../ProdutosCard';

class ProdutoLista extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: [{
        "_id": {
          "$oid": "6024a9a29171ab0efe32a9e6"
        },
        "categoria": "geladeira",
        "descricao": "Geladeira Frost Free Brastemp Side Inverse 540 Litros",
        "preco": 6389,
        "preco_venda": 5019,
        "imagem": "https://raw.githubusercontent.com/PatriciaTorresGraciano/Full-Stack-Eletro/master/img/produtos/geladeira_brastemp.jpg",
        "nome_produto": "geladeira",
        "__v": 0
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83aad"
        },
        "categoria": "geladeira",
        "descricao": "Geladeira Frost Free Brastemp Branca 375 Litros",
        "preco": 2068.68,
        "preco_venda": 1910.9,
        "imagem": "https://raw.githubusercontent.com/PatriciaTorresGraciano/Full-Stack-Eletro/master/img/produtos/geladeira_brastemp_branca.jpg",
        "nome_produto": "geladeira"
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83aae"
        },
        "categoria": "geladeira",
        "descricao": "Geladeira Frost Free Consul Prata 340 Litros",
        "preco": 2199.9,
        "preco_venda": 2069,
        "imagem": "https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/geladeira_consul.jpg?raw=true",
        "nome_produto": "geladeira"
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83aaf"
        },
        "categoria": "fogao",
        "descricao": "Fogão 4 Bocas Consul Inox com Mesa de Vidro",
        "preco": 1209.99,
        "preco_venda": 1129,
        "imagem": "https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/fogao_consul.jpg?raw=true",
        "nome_produto": "fogao"
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83ab0"
        },
        "categoria": "fogao",
        "descricao": "Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático",
        "preco": 600,
        "preco_venda": 519.7,
        "imagem": "https://raw.githubusercontent.com/PatriciaTorresGraciano/Full-Stack-Eletro/master/img/produtos/fogao_atlas_branco.jpg?raw=true",
        "nome_produto": "fogao"
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83ab1"
        },
        "categoria": "microondas",
        "descricao": "Microondas Consul 32 Litros Inox 220V",
        "preco": 580.99,
        "preco_venda": 409.88,
        "imagem": "https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/microondas_consul.jpg?raw=true",
        "nome_produto": "microondas"
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83ab2"
        },
        "categoria": "microondas",
        "descricao": "Microondas 25L Espelhado Philco 220V",
        "preco": 5080.7,
        "preco_venda": 464.53,
        "imagem": "https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/microondas_espelhado.jpg?raw=true",
        "nome_produto": "microondas"
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83ab3"
        },
        "categoria": "microondas",
        "descricao": "Forno de Microondas Eletrolux 20L Branco",
        "preco": 459.99,
        "preco_venda": 436.05,
        "imagem": "https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/microondas_branco.jpg?raw=true",
        "nome_produto": "microondas"
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83ab4"
        },
        "categoria": "lavaLoucas",
        "descricao": "Lava-Louças Eletolux Inox com 10 Serviços. 06 Programas de Lavagem e Painel Blue Touch",
        "preco": 3599,
        "preco_venda": 2799.9,
        "imagem": "https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/lava_loucas_eletrolux.jpg?raw=true",
        "nome_produto": "lavaLoucas"
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83ab5"
        },
        "categoria": "lavaLoucas",
        "descricao": "Lava-Louças Compacta 8 Serviços Branca 127V Brastemp",
        "preco": 1970.5,
        "preco_venda": 1730.61,
        "imagem": "https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/lava_louca_brastemp.jpg?raw=true",
        "nome_produto": "lavaLoucas"
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83ab6"
        },
        "categoria": "lavaRoupas",
        "descricao": "Lavadora de Roupas Philco Inverter 12kg",
        "preco": 2399.9,
        "preco_venda": 2179.9,
        "imagem": "https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/lavadora_philco.jpg?raw=true",
        "nome_produto": "lavaRoupas"
      },{
        "_id": {
          "$oid": "6024ac318c4a2e694df83ab7"
        },
        "categoria": "lavaRoupas",
        "descricao": "Lavadora de Roupas Brastemp 11kg com Turbo Performance Branca",
        "preco": 1699,
        "preco_venda": 1214.1,
        "imagem": "https://github.com/PatriciaTorresGraciano/Full-Stack-Eletro/blob/master/img/produtos/lavadora_brastemp.jpg?raw=true",
        "nome_produto": "lavaRoupas"
      }]
    }
  }

  render() {
    return(
      <FlatList 
        style={ Styles.promotionsList }
        data={ this.state.data }
        renderItem={ ({ item }) => (
          <ProdutosCard data={ item } />
        )}
        keyExtractor={ item => item.id } 
      />
    )
  }
}

export default ProdutoLista