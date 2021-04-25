import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/pizza-crunch', {
      useFindAndModify: false
    }),
    ConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
