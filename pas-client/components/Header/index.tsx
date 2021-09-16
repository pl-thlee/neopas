import React from 'react';
import { HeaderWrapper, Spacer, Wrapper } from './styles';

// interface Props {
//   user: IUser;
// }

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Wrapper>
          <div className="logo">Programming Assistant System</div>
          <div className="right">
            <button>로그인</button>
          </div>
        </Wrapper>
      </HeaderWrapper>
      <Spacer />
    </>
  );
};

export default Header;
