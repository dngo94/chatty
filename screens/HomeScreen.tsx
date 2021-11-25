import * as React from 'react';
import { useEffect, useState } from 'react';
import {Image, StyleSheet,FlatList} from 'react-native';
import { Text, View } from '../components/Themed';
import { DataStore, Auth } from 'aws-amplify';
import { ChatRoom, User} from '../src/models';
import ChatRoomItem from '../components/ChatRoomItem';

export default function HomeScreen(){

   const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
   useEffect(() => {
      const fetchChatRooms = async () => {
         const chatRooms = (await DataStore.query(ChatRoom, c => c.newMessages("gt", 0 )));
         // const chatRooms = (await DataStore.query(ChatRoom));

         setChatRooms(chatRooms);

      // const chatRooms = (await DataStore.query(ChatRoom))
      //   .filter(
      //     (user) => authUser.ChatRoomUsers === authUser.attributes.sub
      //   )
      //   .map((chatRoomUser) => chatRoomUser.chatroom);
   };
   fetchChatRooms();
   }, []);

   return(
      <View style={styles.page}>
      <FlatList 
      data={chatRooms}
      renderItem={({item}) => <ChatRoomItem chatRoom={item}/>}
      showsVerticalScrollIndicator={false}
      />
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
