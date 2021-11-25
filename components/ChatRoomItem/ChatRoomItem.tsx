import React, { useState, useEffect } from "react";
import { Text, Image, View, Pressable, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { DataStore } from "@aws-amplify/datastore";
import {User, Message, ChatRoom } from "../../src/models";
import styles from "./styles";
import Auth from "@aws-amplify/auth";
// import moment from "moment";

export default function ChatRoomItem({ chatRoom }) {
  const [users, setUsers] = useState<User[]>([]); // all users in this chatroom
  // const [users, setUsers] = useState<User | null>(null); // the display user
  const [lastMessage, setLastMessage] = useState<Message | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    // const fetchUsers = async () => {
    //   const fetchedUsers = (await DataStore.query(User))
    //     .filter(user=> user.chatroomID === chatRoom.id)
    //     .map(chatRoomUser => chatRoomUser.user);
    //   const authUser = await Auth.currentAuthenticatedUser();
    //   setUsers(fetchedUsers.find(user => user.id !== authUser.attributes.sub) || null);
    // };
    // fetchUsers();
    DataStore.query(User).then(setUsers);
    console.log(users);

  }, []);
  useEffect(() => {
    if (!chatRoom.chatRoomLastMessageId) { return }
    DataStore.query(Message, chatRoom.chatRoomLastMessageId).then(setLastMessage);
  }, [])


  return (  
    <View style={styles.container}>
      <Image
        source={{ uri: users[1].imageUri }}
        style={styles.image}
      />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
        <Text style={styles.name}>{users[1].name}</Text>
          <Text style={styles.text}>{lastMessage?.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>{lastMessage?.content}</Text>
      </View>
    </View>
  );
}