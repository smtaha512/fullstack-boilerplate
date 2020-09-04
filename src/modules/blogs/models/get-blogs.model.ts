import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetBlogs {
  @Field({ nullable: true }) content?: string;

  @Field({ nullable: true }) title?: string;
}
