import styled from '@emotion/styled';

export const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5%;
  background: #292f36;

  .item {
    font-size: 1.125rem;
    color: #ffff;
    font-weight: 400;
    letter-spacing: 2px;
  }
`;

export const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;
