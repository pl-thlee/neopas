import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';

const config: TypeOrmModuleOptions = {
  url: process.env.CLEARDB_DATABASE_URL,
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_HOST,
  entities: [User],
  synchronize: false,
  charset: 'utf8mb4',
  logging: true,
  keepConnectionAlive: true,
};

export = config;
