import * as React from 'react';
import { useEffect, useState } from 'react';
import {Image, StyleSheet,FlatList} from 'react-native';
import { Text, View } from '../components/Themed';
import { DataStore, Auth } from 'aws-amplify';
import { ChatRoom, ChatRoomUser} from '../src/models';
import ChatRoomItem from '../components/ChatRoomItem';

export default function HomeScreen2(){

   const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

   useEffect(() => {
      const fetchChatRooms = async () => {
         const userData = await Auth.currentAuthenticatedUser();
         const chatRooms = (await DataStore.query(ChatRoomUser))
            .filter(chatRoomUser => chatRoomUser.user.id === userData.attributes.sub)
            .map(chatRoomUser => chatRoomUser.chatroom);

         setChatRooms(chatRooms);
      };
      fetchChatRooms();
   }, []);

   return(
      <View style={styles.page}>
      {/* <FlatList 
      data={chatRooms}
      renderItem={({item}) => <ChatRoomItem chatRoom={item}/>}
      showsVerticalScrollIndicator={false}
      /> */}
      </View> 
      );
   } 
   
   const styles = StyleSheet.create({
      page:{
         backgroundColor: 'white',
         flex: 1
      }
   }
   );
