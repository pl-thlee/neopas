import React, { useEffect } from 'react';
import { ChatHeaderWrapper } from './styles';
import { withRouter, RouteComponentProps } from 'react-router';
interface MatchParams {
  roomID: string;
}

const ChatHeader: React.SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { roomID } = match.params; // Gets roomId from URL

  return <ChatHeaderWrapper>{roomID} 대화방</ChatHeaderWrapper>;
};

export default withRouter(ChatHeader);
