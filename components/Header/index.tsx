import React from 'react';
import { HeaderWrapper, ProfileImg, Spacer, Wrapper } from './styles';
import gravatar from 'gravatar';
import jwtDecode from 'jwt-decode';
import { IToken } from '@components/Editor';
import { Redirect } from 'react-router';

// interface Props {
//   user: IUser;
// }

const Header = () => {
  const token = localStorage.getItem('user');
  const currentUserId = jwtDecode<IToken>(token!).userId;

  const loginBtn = {};
  const logoutBtn = {};
  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <div className="logo">NeoPAS (Programming Assistant System)</div>
          <div className="right">
            <Redirect to="/login">
              <ProfileImg src={gravatar.url(currentUserId, { size: '28px', default: 'retro' })} />
            </Redirect>
          </div>
        </Wrapper>
      </HeaderWrapper>
      <Spacer />
    </>
  );
};

export default Header;
