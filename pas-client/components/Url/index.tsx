import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import ChatHeader from '@components/Chat/ChatHeader/Index';
import { TextInputField, EnterRoomBtn, Text, Wrap } from './styles';
import { colors } from '@material-ui/core';

const Url = () => {
  const [roomID, setRoomID] = useState('');

  const handleRoomNameChange = useCallback(
    (e: any) => {
      setRoomID(e.currentTarget.value);
    },
    [roomID],
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
      <Wrap>
        <EnterRoomBtn>
          <input type="text" placeholder="학번입력" value={roomID} onChange={handleRoomNameChange} />
        </EnterRoomBtn>

        {/* <JoinRoom to={'/${roomID}'}>Join Room</JoinRoom> */}
        <TextInputField>
          <Link to={`/${roomID}`}>
            <Text>Join room</Text>
          </Link>
        </TextInputField>
      </Wrap>
    </div>
  );
};

export default Url;
