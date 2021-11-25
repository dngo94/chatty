import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import { ChatRoom, User } from '../../src/models';
import { Auth } from 'aws-amplify';

export default function UserItem({ user }) {

    const navigation = useNavigation();
  
    // const onPress = async () => {
  
      // TODO if there is already a chat room between these 2 users
      // then redirect to the existing chat room
      // otherwise, create a new chatroom with these users.
      // const authUser = await Auth.currentAuthenticatedUser();
      // const dbUser = await DataStore.query(User, authUser.attributes.sub);
      // // console.log(authUser);
      // // // Create a chat room
      // const newChatRoom = await DataStore.save(new ChatRoom({
      //   newMessages: 0, 
      //   // ChatRoomUsers: [authUser, dbUser]
      // }));
      
      // // // connect authenticated user with the chat room
      
      // // await DataStore.save(new ChatRoomUser({
      // //   user: dbUser,
      // //   chatroom: newChatRoom
      // // }))
  
      // // // connect clicked user with the chat room
      // // await DataStore.save(new ChatRoomUser({
      // //   user,
      // //   chatroom: newChatRoom
      // // }));
  
      // navigation.navigate('ChatRoom', { id: newChatRoom.id });
    // }
  
    return (
      // <Pressable onPress={onPress} style={styles.container}>
        <View style={styles.container}> 
        <Image source={{ uri: user.imageUri}} style={styles.image} />
  
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>{user.name}</Text>
          </View>
        </View>
        </View>
      // </Pressable>
    );
  }



// export default function Usertem({user} : {user:any}){
  
//   const navigation = useNavigation();

//   const onPress = () => {
//   }

//   return(
//     <Pressable onPress={onPress} style= {styles.container}>
//       <Image source={{uri: user.imageUri }} style={styles.image} />  

//     <View style = {styles.rightContainer}>
//       <View style={styles.row}>
//         <Text  style={styles.name}> {user.name}</Text>
//       </View>
//     </View>
//     </Pressable>
// );

// }


//Dummy data test
// import React from 'react';
// import {Text, Image, View, StyleSheet, TouchableOpacity, Pressable} from 'react-native';
// import styles from './styles';
// import { useNavigation } from '@react-navigation/core';

// export default function Usertem({user} : {user:any}){
  
//   const navigation = useNavigation();

//   const onPress = () => {
//   }

//   return(
//     <Pressable onPress={onPress} style= {styles.container}>
//       <Image source={{uri: user.imageUri }} style={styles.image} />  

//     <View style = {styles.rightContainer}>
//       <View style={styles.row}>
//         <Text  style={styles.name}> {user.name}</Text>
//       </View>
//     </View>
//     </Pressable>
// );

// }