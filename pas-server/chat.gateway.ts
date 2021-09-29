import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:3000', 'https://neopas-server.herokuapp.com/'],
    // methods: ['GET', 'POST'],
    credential: true,
  },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  async afterInit() {
    console.log('Initialized');
  }

  async handleConnection(socket: Socket) {
    console.log('connect');
    console.log(`Client ${socket.id} connected`);

    const { roomID } = socket.handshake.query;
    socket.join(roomID);
    console.log(`Client has joined in ${roomID}`);
    // socket.to(`roomId`).emit('connection', 'a new user has joined the room');
  }
  async handleDisconnect(socket: Socket) {
    console.log('disconnect');
    console.log(`Client ${socket.id} disconnected`);
    const { roomID } = socket.handshake.query;
    socket
      .to(roomID)
      .emit('disconnect', `Client ${socket.id} has left the room`);
    socket.disconnect();
  }

  // @SubscribeMessage('connection')
  // async joinRoom(socket: Socket) {}

  // @SubscribeMessage('disconnection')
  // async leaveRoom(socket: Socket) {}

  @SubscribeMessage('message')
  handleMessage(socket: Socket, message: string) {
    const { roomID } = socket.handshake.query;
    this.server.to(roomID).emit('message', message);
    // socket.in(roomID).emit('message', message);
    console.log(`${socket.id}가 메시지 보냄: ${message}`);
  }
}
