import styled from '@emotion/styled';

export const MessagesContainer = styled.div`
  flex: 1;
  min-height: 100px;
  border: none;
  border-radius: 7px 7px 0 0;

  overflow: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.4);
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  // -ms-overflow-style: none;
  // scrollbar-width: none;

  // &::-webkit-scrollbar {
    // display: none;
  // }
`;

export const MessagesList = styled.ol`
  list-style-type: none;
  padding: 0;
`;

export const MessagesItem = styled.li`
  margin: 8px;
  padding: 0.4375rem;
  word-break: break-word;
  border-radius: 0.1875rem;
`;

export const MyMessage = styled.li`
  width: 55%;
  padding: 0.4375rem;
  word-break: break-word;
  border-radius: 0.1875rem;
  background-color: #f7e600;
  margin-left: auto;
  margin-right: 1.5rem;
`;

export const ReceivedMessage = styled.li`
  width: 55%;
  padding: 0.4375rem;
  word-break: break-word;
  border-radius: 0.1875rem;
  background-color: lightgray;
  margin-right: auto;
`;
