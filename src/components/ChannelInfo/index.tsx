import React from 'react';

import { Container, Title, HashtagIcon, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>chat-live</Title>

      <Separator />

      <Description>Open Channel</Description>
    </Container>
  )
};

export default ChannelInfo;