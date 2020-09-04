import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions, Like } from 'typeorm';

import { BlogsEntity } from './blogs.entity';
import { CreateBlog } from './models/create-blog.model';
import { GetBlogs } from './models/get-blogs.model';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogsEntity)
    private readonly blogsRepository: Repository<BlogsEntity>,
  ) {}

  findOneById(id: string, selectFields?: (keyof BlogsEntity)[]) {
    return this.blogsRepository
      .findByIds([id], {
        ...(selectFields ? { select: selectFields } : {}),
      })
      .then(res => (res.length ? res[0] : {}))
      .catch(console.log);
  }

  findBlogs(args: GetBlogs, selectFields?: (keyof BlogsEntity)[]) {
    return this.blogsRepository.find({
      where: {
        ...(args.content ? { content: Like(`%${args.content}%`) } : {}),
        ...(args.title ? { title: Like(`%${args.title}%`) } : {}),
      },
      ...(selectFields ? { select: selectFields } : {}),
    });
  }

  createBlog(blog: CreateBlog) {
    const blogEntity = this.blogsRepository.create(blog);
    return this.blogsRepository.save(blogEntity).then(res => {
      console.log(res);
      return res;
    });
  }
}
