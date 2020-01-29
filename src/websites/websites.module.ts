import { Module } from '@nestjs/common';
import { WebsitesService } from './websites.service';
import { WebsitesController } from './websites.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Websites} from "../entities/Websites";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../auth/constants";

@Module({
  providers: [WebsitesService],
  controllers: [WebsitesController],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([Websites])],
  exports: [WebsitesService]
})
export class WebsitesModule {}
