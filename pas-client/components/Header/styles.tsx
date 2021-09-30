import Responsive from '@components/Responsive';
import styled, { StyledComponent } from '@emotion/styled';

export const HeaderWrapper: StyledComponent<{}> = styled.header`
  position: fixed;
  width: 100vw;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-bottom: 1px rgb(68, 76, 86) solid;
  z-index: 628;
`;

export const Wrapper = styled(Responsive)`
  width: inherit;
  height: 4rem;
  display: flex;
  background: #292F36;
  align-items: center;
  justify-content: space-between;

  .logo {
    color: white;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

export const Spacer = styled.div`
  height: 4rem;
`;

export const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

export const ProfileImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50% !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
