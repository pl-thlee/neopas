import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';

const isDevelopment = process.env.NODE_ENV == 'development';

const config: TypeOrmModuleOptions = {
  url: process.env.CLEARDB_DATABASE_URL,
  type: 'mysql',
  host: `${isDevelopment ? 'localhost' : 'https://neopas-server.herokuapp.com'}`,
  port: 3306,
  username: `${isDevelopment ? process.env.DB_USER : process.env.HEROKU_USER}`,
  password: `${isDevelopment ? process.env.DB_PASS : process.env.HEROKU_PASS}`,
  database: `${isDevelopment ? process.env.DB_HOST : process.env.HEROKU_HOST}`,
  entities: [User],
  synchronize: false,
  charset: 'utf8mb4',
  logging: true,
  keepConnectionAlive: true,
};

export = config;
