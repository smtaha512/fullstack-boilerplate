import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsController } from './blogs.controller';
import { BlogsEntity } from './blogs.entity';
import { BlogsResolver } from './blogs.resolver';
import { BlogsService } from './blogs.service';

@Module({
  controllers: [BlogsController],
  imports: [TypeOrmModule.forFeature([BlogsEntity])],
  providers: [BlogsService, BlogsResolver],
})
export class BlogsModule {}
