import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('Blog')
@Entity('blog')
export class BlogsEntity {
  @Field() @PrimaryGeneratedColumn('uuid') uuid: string;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @Field() @Column() title: string;

  @Field() @Column() content: string;
}
