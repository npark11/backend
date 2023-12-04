import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
// import { UsersService } from '../users/users.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    UsersModule, //
  ],
  providers: [
    JwtAccessStrategy,
    AuthResolver, //
    AuthService,
  ],
})
export class AuthModule {}
