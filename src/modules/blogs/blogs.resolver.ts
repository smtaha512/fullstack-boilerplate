import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { RequestedFields } from '../../shared/decorators/gql-requested-fields';
import { BlogsService } from './blogs.service';
import { Blog } from './models/blogs.model';
import { CreateBlog } from './models/create-blog.model';
import { GetBlogs } from './models/get-blogs.model';
import { BlogsEntity } from './blogs.entity';

@Resolver(() => Blog)
export class BlogsResolver {
  constructor(private readonly blogsService: BlogsService) {}
  @Query(() => Blog, { name: 'blog' })
  getBlogById(
    @Args('id', { type: () => String })
    id: string,
    @RequestedFields() info: (keyof BlogsEntity)[],
  ) {
    return this.blogsService.findOneById(id, info);
  }

  @Query(() => [Blog], { name: 'blogs' })
  getBlogs(
    @Args() args: GetBlogs,
    @RequestedFields() info: (keyof BlogsEntity)[],
  ) {
    return this.blogsService.findBlogs(args, info);
  }

  @Mutation(() => Blog)
  createBlog(@Args('blog') blog: CreateBlog) {
    return this.blogsService.createBlog(blog);
  }

  // @Resolver('Author')
  // @ResolveField()
  // blogs(@Parent() blog: Blog) {
  //   return blog;
  // }
}
