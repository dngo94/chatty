import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';

export default function Usertem({user} : {user:any}){
  
  const navigation = useNavigation();

  const onPress = () => {
  }

  return(
    <Pressable onPress={onPress} style= {styles.container}>
      <Image source={{uri: user.imageUri }} style={styles.image} />  

    <View style = {styles.rightContainer}>
      <View style={styles.row}>
        <Text  style={styles.name}> {user.name}</Text>
      </View>
    </View>
    </Pressable>
);

}