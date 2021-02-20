import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, Linking } from 'react-native';
import Styles from './styles';

class ProdutosCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={ Styles.centeredView }>
        <View style={ Styles.cardView }>
          <Image style={ Styles.promotionImage } source={ {uri: this.props.data.imagem} }  />
          <View style={ Styles.descriptionText }>
            <Text style={ Styles.titleText }>{ this.props.data.descricao }</Text>
            <Text style={ Styles.priceText }>R$ { this.props.data.preco_venda }</Text>
            <TouchableHighlight
                style={ Styles.linkButton }
              >
              <Text style={ Styles.textLinkButton }>Comprar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

export default ProdutosCard