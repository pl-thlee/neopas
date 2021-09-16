import Responsive from '@components/Responsive';
import styled, { StyledComponent } from '@emotion/styled';

export const HeaderWrapper: StyledComponent<{}> = styled.header`
  position: fixed;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-bottom: 1px rgb(68, 76, 86) solid;
  z-index: 628;
`;

export const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
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
