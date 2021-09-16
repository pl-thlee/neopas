import {
  Body,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from './user.repository';
import { SignUpUserDto } from './dto/signup-user.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpUserDto: SignUpUserDto): Promise<void> {
    const { studentId } = signUpUserDto;
    // 이미 가입된 학번이 있는지 확인
    const user = this.userRepository.findByStudentId(studentId);
    if (!user) {
      throw new NotFoundException(
        `Can't find user with student id ${studentId}.`,
      );
    }

    // 기존에 가입한 정보가 없다면 회원가입 진행
    return this.userRepository.createUser(signUpUserDto);
  }

  async logIn(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const { userId, password } = loginUserDto;
    const user = await this.userRepository.findOne({ userId });

    if (user && (await bcrypt.compare(password, user.password))) {
      // 사용자 토큰 생성 (Secret + Payload)
      const payload = { userId };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    } else {
      throw new UnauthorizedException('로그인 실패');
    }
  }
}
