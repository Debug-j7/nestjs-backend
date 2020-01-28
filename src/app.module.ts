import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ContactsModule } from './contacts/contacts.module';
import { EmailsModule } from './emails/emails.module';
import { PhonesModule } from './phones/phones.module';
import { WebsitesModule } from './websites/websites.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/entities/*{.ts,.js}'],
  }), ContactsModule, EmailsModule, PhonesModule, WebsitesModule, AuthModule, UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
