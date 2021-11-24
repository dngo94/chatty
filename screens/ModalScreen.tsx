import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, Image, FlatList, SectionList, Pressable } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
 import Auth from '@aws-amplify/auth';


export default function ModalScreen() {
  
  const signOut = () => {
      Auth.signOut();
  };

  return (
    <View style = {styles.container }>
      <View style = {{
        flexDirection: 'row',
      }} >
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/3a/4b/ae/3a4bae641951d783d4a6cb253c4f8233.jpg' }} 
          style={styles.avatar}/>
          <View style = {{
            padding: 10
          }}>
            <Text style={styles.title}>Modal</Text>
            <Text>Status</Text>
          </View>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <View style={styles.separator} />
        <View style = {{
            alignItems: 'center'
          }}>
          <Text style={{padding: 15, fontSize: 20, fontWeight: 'bold',}}>Contributors</Text>
          <Text>Daisy Ngo - dngo94@csu.fullerton.edu</Text>
          <Text>Luis Camacho - angel1@csu.fullerton.edu</Text>
          <Text>Jin Park - jinhpark9@@csu.fullerton.edu</Text>
          <Text>Christopher  Panella- cpanella@csu.fullerton.edu</Text>
          <View style = {{
            paddingTop: 180
          }}>
            <Text style = {{
              fontWeight: 'bold',
              color: "#3777f0",
              padding: 15
            }}>Log Out</Text>   
          </View>
          <Pressable onPress={signOut}>
            <MaterialCommunityIcons name="logout" size={24} color= "#3777f0" /> 
          </Pressable>          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
  },
  avatar: {
    width: 100, 
    height: 100, 
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 80,
    justifyContent: 'space-around',
  },
});
