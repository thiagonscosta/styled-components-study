import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage from '../ChannelMessage';

import { useState } from 'react';
import { useEffect } from 'react';

interface IMessage {
  author: string;
  date: string;
  content: string;
  hasMention: boolean;
  isBot: boolean;
}

const messagesArr = [
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: true },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: true },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: true },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: true },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: true, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: true, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: true },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: true, isBot: false },
  { author: 'Logan', date: '15/06/2002', content: 'Hello darkness my old friend', hasMention: false, isBot: true },
]

const ChannelData: React.FC = () => {

  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages(messagesArr);
  }, [messages]);

  return (
    <Container>
      <Messages>
        {messages.map(message => (
          <ChannelMessage 
            author={message.author} 
            date={message.date} 
            content={message.content} 
            hasMention={message.hasMention} 
            isBot={message.isBot} 
          />))
        }
      </Messages>
      
      <InputWrapper>
        <Input type="text" placeholder="Conversar"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;