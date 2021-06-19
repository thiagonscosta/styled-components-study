import React, { useState } from 'react';
import { useEffect } from 'react';

import { Container, User, Avatar, Role } from './styles';

interface UserProps {
  nickName: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickName, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickName}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

interface IUser {
  nickName: string;
  isBot: boolean;
  isOnline: boolean;
}

const usersArr = [
    { nickName: 'User Test - 1', isBot: true, isOnline: false },
    { nickName: 'User Test - 2', isBot: false, isOnline: false },
    { nickName: 'User Test - 3', isBot: false, isOnline: false },
    { nickName: 'User Test - 4', isBot: false, isOnline: false },
    { nickName: 'User Test - 5', isBot: false, isOnline: false },
    { nickName: 'User Test - 6', isBot: false, isOnline: false },
    { nickName: 'User Test - 7', isBot: false, isOnline: false },
    { nickName: 'User Test - 8', isBot: false, isOnline: false },
    { nickName: 'User Test - 9', isBot: false, isOnline: false },
    { nickName: 'User Test - 10', isBot: false, isOnline: true },
    { nickName: 'User Test - 11', isBot: false, isOnline: true },
    { nickName: 'User Test - 12', isBot: false, isOnline: true },
    { nickName: 'User Test - 13', isBot: false, isOnline: false },
    { nickName: 'User Test - 14', isBot: false, isOnline: false },
    { nickName: 'User Test - 15', isBot: false, isOnline: false },
    { nickName: 'User Test - 16', isBot: false, isOnline: false },
    { nickName: 'User Test - 17', isBot: false, isOnline: false },
    { nickName: 'User Test - 18', isBot: false, isOnline: false },
    { nickName: 'User Test - 19', isBot: false, isOnline: false },
    { nickName: 'User Test - 20', isBot: false, isOnline: true },
    { nickName: 'User Test - 21', isBot: false, isOnline: true },
    { nickName: 'User Test - 22', isBot: false, isOnline: true },
    { nickName: 'User Test - 23', isBot: true, isOnline: false },
    { nickName: 'User Test - 24', isBot: false, isOnline: false },
    { nickName: 'User Test - 25', isBot: false, isOnline: false },
  ];

const UserList: React.FC = () => {

  const [onlineUsers, setOnlineUsers] = useState<IUser[]>([]);

  const [offlineUsers, setOfflineUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setOnlineUsers(usersArr.filter(user => user.isOnline));
    setOfflineUsers(usersArr.filter(user => !user.isOnline));
  }, []);

  return (
    <Container>
      <Role>Disponível - {onlineUsers.length}</Role>
      <UserRow nickName="Chatuba" />
      {
        onlineUsers.map(user => (
          <UserRow 
            key={user.nickName} 
            nickName={user.nickName} 
            isBot={user.isBot} 
          /> 
        ))
      }
      <Role>Offline - {offlineUsers.length}</Role>
      {
        offlineUsers.map(user => (
          <UserRow 
            key={user.nickName} 
            nickName={user.nickName} 
            isBot={user.isBot} 
          />
        ))
      }
    </Container>
  )
};

export default UserList;