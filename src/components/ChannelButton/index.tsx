import React from 'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface ChannelButtonProps {
  channelName: string;
} 

const ChannelButton: React.FC<ChannelButtonProps> = ({
  channelName,
}) => {
  return (
    <Container>
      <div>
        <HashtagIcon />
        <span>live-chat</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  )
}

export default ChannelButton;