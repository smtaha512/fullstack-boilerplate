import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Blog {
  @Field() uuid: string;

  @Field() title: string;

  @Field() content: string;

  @Field() createdAt: Date;

  @Field() updatedAt: Date;
}
