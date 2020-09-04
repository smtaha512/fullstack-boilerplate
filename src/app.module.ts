import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './environments/environment';
import { BlogsModule } from './modules/blogs/blogs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...environment.database, logging: true }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), '/src/schema.gql'),
    }),
    BlogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
