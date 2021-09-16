import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';
import { SignUpUserDto } from './dto/signup-user.dto';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByStudentId(studentId: number) {
    return await this.findOne({ where: { studentId } });
  }

  async createUser(signUpUserDto: SignUpUserDto): Promise<void> {
    const { password, ...userWithoutPassword } = signUpUserDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      await this.save({ password: hashedPassword, ...userWithoutPassword });
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing student ID.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
