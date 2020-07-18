interface User {
  id: string;
  username: string;
};

const users = new Map<string, User>();

users.set('1', { id: '1', username: 'Max' });
users.set('2', { id: '2', username: 'Joa' });
users.set('3', { id: '3', username: 'Jul' });

interface Message {
  id: string;
  text: string;
  userId: string;
};

const messages = new Map<string, Message>();

messages.set('1',{ id: '1', text: 'Hello Father!', userId: '2'});
messages.set('2',{ id: '2', text: 'Hello Sun!', userId: '1'});

export default {
  users,
  messages,
};
