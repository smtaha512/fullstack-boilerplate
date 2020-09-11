import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { RequestedFields } from '../../shared/decorators/gql-requested-fields';
import { BlogsService } from './blogs.service';
import { CreateBlog } from './models/create-blog.model';
import { GetBlogs } from './models/get-blogs.model';
import { BlogsEntity } from './blogs.entity';

@Resolver(() => BlogsEntity)
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) {}
  @Query(() => BlogsEntity, { name: 'blog' })
  getBlogById(
    @Args('id', { type: () => String })
    id: string,
    @RequestedFields() info: (keyof BlogsEntity)[],
  ) {
    return this.blogsService.findOneById(id, info);
  }

  @Query(() => [BlogsEntity], { name: 'blogs' })
  getBlogs(
    @Args() args: GetBlogs,
    @RequestedFields() info: (keyof BlogsEntity)[],
  ) {
    return this.blogsService.findBlogs(args, info);
  }

  @Mutation(() => BlogsEntity)
  createBlog(@Args('blog') blog: CreateBlog) {
    return this.blogsService.createBlog(blog);
  }
}
