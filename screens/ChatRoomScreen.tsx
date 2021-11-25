import React, { useEffect, useState } from "react";
import { Text, View } from "../components/Themed";
import { StyleSheet, FlatList, SafeAreaView, ActivityIndicator} from "react-native"; 
import Message from "../components/Message/Message"; 
import chatRoomData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";
import { useRoute, useNavigation } from '@react-navigation/core';
import { ChatRoom } from "../src/models";
import { DataStore } from "aws-amplify";



export default function ChatRoomScreen() {
  
    const [chatRoom, setChatRoom] = useState<ChatRoom|null>(null);
  
    const route = useRoute();
    const navigation = useNavigation();
  
    useEffect(() => {
      fetchChatRoom();
    }, []);
  
  
    const fetchChatRoom = async () => {
      if (!route.params?.id) {
        console.warn("No chatroom id provided");
        return;
      }
      const chatRoom = await DataStore.query(ChatRoom, route.params.id);
      if (!chatRoom) {
        console.error("Couldn't find a chat room with this id");
      } else {
        setChatRoom(chatRoom);
      }
    };
  
    // navigation.setOptions({title: 'Elon Musk'})
  
    if (!chatRoom) {
      return <ActivityIndicator />
    }
  
    return (
      <SafeAreaView style={styles.page}>
        {/* <FlatList
          data={messages}
          renderItem={({ item}) => <Message message={item} />}
          inverted
        />
        <MessageInput chatRoom={chatRoom} /> */}
      </SafeAreaView>
    )
  };
  
  const styles = StyleSheet.create({
    page: {
      backgroundColor: 'white',
      flex: 1,
    }
  })
// export default function ChatRoomScreen() {

//     const route = useRoute();
//     const navigation = useNavigation();

//     useEffect(() => {
//         navigation.setOptions({title: 'Elon Musk'});
//     });
    
//     return (
//         <SafeAreaView style={styles.page}> 
//             <FlatList
//                 data={chatRoomData.messages}
//                 renderItem={({item}) => <Message message={item} />}
//                 inverted
//             />
//             <MessageInput />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     page: {
//         backgroundColor: 'white',
//         flex: 1,
//     }
// })