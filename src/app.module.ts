import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { TweetsModule } from './tweets/tweets.module';
import { MailListModule } from './mail-list/mail-list.module';
import { BullModule } from '@nestjs/bull';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_DNS),
    ScheduleModule.forRoot(),
    TweetsModule,
    MailListModule,
  ],
})
export class AppModule {}
