import React, { KeyboardEvent, useCallback, useState } from 'react';
import useChat from '@hooks/useChat';
import ChatHeader from '@components/Chat/ChatHeader/Index';
import { RouteComponentProps, withRouter } from 'react-router-dom';

// input import
import { BiSend } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';
import { ChatArea, ChatToolbar, MessageBox } from './styles';

// feed import
import {
  MessagesContainer,
  MessagesList,
  MessagesItem,
  MyMessage,
  ReceivedMessage,
} from '@components/Chat/ChatFeed/styles';

interface MatchParams {
  roomID: string;
}
interface messageItem {
  [index: number]: number | string;
  message: String;
  ownedByCurrentUser: boolean;
}

const Chat: React.SFC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { roomID } = match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomID);

  const [newMessage, setNewMessage] = useState(''); // Message to be sent

  const handleNewMessageChange = useCallback(
    (e: any) => {
      console.log('[handleNewMessageChange]', e.target.value);
      setNewMessage(e.target.value);
    },
    [newMessage],
  );

  const handleSendMessage = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        setNewMessage('');
        // console.log('handleSendMessage', newMessage);
        sendMessage(newMessage);
      }
    },
    [newMessage],
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        height: 'calc(100vh - 4rem)',
      }}
    >
      <ChatHeader />
      <div id="#chatFeed" style={{ display: 'flex', flex: 0.8, padding: '1rem', height: '100px' }}>
        <MessagesContainer>
          <MessagesList>
            {messages.map((message, i: number) => (
              <MessagesItem key={i}>
                {message.ownedByCurrentUser ? (
                  <MyMessage>Me : {message.body}</MyMessage>
                ) : (
                  <ReceivedMessage>Stranger : {message.body}</ReceivedMessage>
                )}
                {/* {message.body} */}
              </MessagesItem>
            ))}
          </MessagesList>
        </MessagesContainer>
      </div>

      <MessageBox>
        <ChatArea
          placeholder="메시지를 입력하세요"
          onChange={handleNewMessageChange}
          value={newMessage}
          onKeyPress={handleSendMessage}
        />
        <ChatToolbar>
          <IconContext.Provider value={{ size: '1.5rem', color: 'black' }}>
            <GrEmoji />
            <BiSend />
          </IconContext.Provider>
        </ChatToolbar>
      </MessageBox>
    </div>
  );
};

export default withRouter(Chat);
