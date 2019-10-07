import { Module } from '@nestjs/common'

import BlogPost from './blog-post.entity'
import { BlogPostService } from './blog-post.service'
import { BlogPostController } from './blog-post.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BlogPostRepository } from './blog-post.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([ BlogPost, BlogPostRepository ])
  ],
  controllers: [ BlogPostController ],
  providers:   [ BlogPostService ],
  exports: [ BlogPostService ]
})

export class BlogPostModule {}