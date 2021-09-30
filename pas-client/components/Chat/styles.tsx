import styled from '@emotion/styled';

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.2;
`;

export const ChatArea = styled.textarea`
  width: 100%;
  height: auto;
  padding: 1rem;
  resize: none !important;
  overflow: hidden;
`;

export const ChatToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgb(248, 248, 248);
  height: 3rem;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const SendButton = styled.button``;
