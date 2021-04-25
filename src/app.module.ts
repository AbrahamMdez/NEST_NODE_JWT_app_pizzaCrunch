import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';

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

export class AppModule {
  static port: number | string;

  /* Le añadimos _ a ConfigServie para decir que es un servicio inyectado, aunque no es obligatorio decirlo */
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
