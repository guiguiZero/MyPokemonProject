import React from 'react'
import propTypes from 'prop-types'
import { View, Vibration, Text, StyleSheet } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'

const second = 1000;

export const RandomCard = ({ navigation, route}) =>{
    let list = route.params.list;
    let card = getRandomCard(list);
    checkRarity(card);  
    return(
        <View style={styles.view}>
            <CardViewWithImage
            width={300}
            source={{uri: card.images.small}}
            content={ 
                <Text style={styles.Text}>
                    Set : {card.set.name} {"\n"}
                    Ralease : {card.set.releaseDate} {"\n"}
                    Rarity : {card.rarity} {"\n"}
                </Text>
             }
            title={ card.name }
            imageWidth={ '100%' }
            imageHeight={ 500 }
            roundedImage={ false }
          />
        </View>
    )
}

const getRandomCard = (list) =>{
    let card = list[Math.floor(Math.random()*list.length)];
    return card;
}

const checkRarity = (item) => {
    console.log(item);
    let rarity = item.rarity;
    if(rarity === "Common" || rarity === "Uncommun" || rarity === "Rare"){
        // console.log("Vibration de 2s");
        Vibration.vibrate(2 * second);
    }
    if(rarity === "Rare Holo" || rarity === "Rare Shiny" || rarity === "Rare Secret" || rarity === "Rare Prism Star" || rarity === "Prime" || rarity === "Rare ACE"){
        // console.log("Vibration de 4s");
        Vibration.vibrate(4 * second);
    }
    if(rarity === "V" || rarity === "VM" || rarity === "Promo" || rarity === "Rare Rainbow" || rarity === "Rare Ultra" || rarity === "Shining"){
        // console.log("Vibration de 6s");
        Vibration.vibrate(6 * second);
    }
    if(rarity === "Rare Holo EX" || rarity === "Rare Holo GX" || rarity === "Rare Holo LV.X" || rarity === "Rare Holo Star" || rarity === "Rare Holo V" || rarity === "Rare Holo VMAX" || rarity === "Rare Holo VSTAR" || rarity === "Rare Shiny GX"){
        // console.log("Vibration de 8s");
        Vibration.vibrate(8 * second);
    }
    if(rarity === "Rare BREAK" || rarity === "Legend"){
        //console.log("Vibration de 10s");
        Vibration.vibrate(10 * second);
    }

}

RandomCard.prototype ={
    card: propTypes.func
}

const styles = StyleSheet.create({
    Text: {
        fontSize : 15
    },
    view : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    }
});