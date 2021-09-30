import Url from '@components/Url';
import Header from '@components/Header';
import React from 'react';
import { Redirect } from 'react-router';

const Lobby = () => {
  // JWT 토큰이 있는지 확인하고
  if (!localStorage.getItem('user')) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header />
      <div style={{ display: 'flex', background: '#292F36' }}>
        <Url />
      </div>
    </>
  );
};

export default Lobby;
