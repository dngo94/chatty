// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { Message, ChatRoom, User } = initSchema(schema);

export {
  Message,
  ChatRoom,
  User
};