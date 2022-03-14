import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, TouchableOpacity, Button } from 'react-native';
import { CardViewWithImage } from 'react-native-simple-card-view'
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail } from './component/Detail'
import { RandomCard } from './component/RandomCard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"  
          component={Home}
        />
        <Stack.Screen
          name="Details"
          component={Detail}
        /> 
        <Stack.Screen
          name="Gacha"
          component={RandomCard}
        />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({navigation}) => {
  const [res, setRes] = useState([]);
  useEffect(() => {
        axios.get('https://api.pokemontcg.io/v2/cards')
        .then(function (response) {
        console.log(response.data.data);
        setRes(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
        
  }, []);
  return(
    <View>
      <Button
        style = {styles.button}
        title = "get a random card !"
        onPress = {() => navigation.navigate('Gacha', {list: res})}
      />
      <FlatList
        contentContainerStyle={{
          flew : 1,
          alignItems : 'center',
          justifyContent : 'center',
        }}
        data={res}
        renderItem={({item}) =>
            <CardViewWithImage
            width={300}
            source={{uri: item.images.small}}
            content={ 'Click on me to get more details !' }
            title={ item.name }
            imageWidth={ '100%' }
            imageHeight={ 500 }
            onPress={() => navigation.navigate('Details', {card: item})}
            roundedImage={ false }
          />
      }
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  button : {
    position : 'relative',
    top : 0
  }
});
