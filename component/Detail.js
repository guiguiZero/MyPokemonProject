import React from 'react'
import propTypes from 'prop-types'
import { View, Vibration, Text, StyleSheet } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'

//Ici la variable seconde représente une seconde
const second = 1000;

export const Detail = ({ navigation, route}) =>{
    console.log(route.params.card.name);
    checkRarity(route.params.card);
    return(
        <View style={styles.view}>
            //Ici CardViewWithImage, permet d'afficher les éléments 
            //contenu dans route.params.card
            <CardViewWithImage
            width={300}
            source={{uri: route.params.card.images.small}}
            content={ 
                <Text style={styles.Text}>
                    Set : {route.params.card.set.name} {"\n"}
                    Ralease : {route.params.card.set.releaseDate} {"\n"}
                    Rarity : {route.params.card.rarity}
                </Text>
             }
            title={ route.params.card.name }
            imageWidth={ '100%' }
            imageHeight={ 500 }
            roundedImage={ false }
          />
        </View>
    )
}

//Ici on vérifi la rareté de notre carte, et cela 
//fais vibrer le téléphone entre 2 et 10 secondes
//en fonctione de la rareté
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

Detail.prototype ={
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
