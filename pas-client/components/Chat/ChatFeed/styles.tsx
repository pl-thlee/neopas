import styled from '@emotion/styled';

export const MessagesContainer = styled.div`
  flex: 1;
  min-height: 100px;
  border: none;
  border-radius: 7px 7px 0 0;
  overflow-y: auto;
`;

export const MessagesList = styled.ol`
  list-style-type: none;
  padding: 0;
`;

export const MessagesItem = styled.li`
  margin: 8px;
  padding: 12px 8px;
  word-break: break-word;
  border-radius: 4px;
  color: white;
`;

export const MyMessage = styled.li`
  width: 55%;
  padding: 12px 8px;
  word-break: break-word;
  border-radius: 4px;
  background-color: rgb(0, 132, 255);
  margin-left: auto;
`;

export const ReceivedMessage = styled.li`
  width: 55%;
  padding: 12px 8px;
  word-break: break-word;
  border-radius: 4px;
  background-color: #3f4042;
  margin-right: auto;
`;
