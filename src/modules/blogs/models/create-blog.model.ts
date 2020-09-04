import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBlog {
  @Field() title: string;

  @Field() content: string;
}
