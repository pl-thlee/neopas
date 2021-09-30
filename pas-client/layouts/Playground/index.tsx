import React from 'react';
import Chat from '@components/Chat';
import Editor from '@components/Editor';
import Header from '@components/Header';
import Nav from '@components/Snb';
import { Redirect } from 'react-router';

const Playground = () => {
  // if (!localStorage.getItem('user')) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Nav />
        <Editor />
        <Chat />
      </div>
    </>
  );
};

export default Playground;
