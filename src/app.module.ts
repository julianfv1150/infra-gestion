import { Module } from '@nestjs/common';
import { AppController } from './application/controllers/app.controller';
import { AppService } from './application/services/app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
