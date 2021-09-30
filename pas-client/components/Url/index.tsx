import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextInputField, EnterRoomBtn, Text, Wrap } from './styles';

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
          <input type="text" placeholder="Playground 이름 설정" value={roomID} onChange={handleRoomNameChange} />
        </EnterRoomBtn>

        {/* <JoinRoom to={'/${roomID}'}>Join Room</JoinRoom> */}
        <TextInputField>
          <Link to={`/${roomID}`} style={{ textDecoration: 'none' }}>
            <Text>Playground 참가</Text>
          </Link>
        </TextInputField>
      </Wrap>
    </div>
  );
};

export default Url;
