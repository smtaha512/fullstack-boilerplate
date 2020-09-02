import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './environments/environment';

@Module({
  imports: [TypeOrmModule.forRoot({ ...environment.database })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
