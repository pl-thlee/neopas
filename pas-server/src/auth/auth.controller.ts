import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { User } from 'src/auth/entities/user.entity';
import { AuthService } from './auth.service';
import { SignUpUserDto } from './dto/signup-user.dto';
import { GetUser } from './get-user.decorator';

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '회원가입' })
  @Post('signup')
  signUp(@Body() signUpUserDto: SignUpUserDto): Promise<void> {
    return this.authService.signUp(signUpUserDto);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Body() loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    return this.authService.logIn(loginUserDto);
  }

  @Get('login')
  @UseGuards(AuthGuard())
  async test(@GetUser() user: User) {
    // UserGuards 에 @nestjs/passport 에서 가져온 AuthGuard() 를 이용하면 사용자 정보 주입 가능
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
