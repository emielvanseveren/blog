import { Module } from '@nestjs/common'

import Post from './post.entity'
import { PostService } from './post.service'
import { PostController } from './post.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostRepository } from './post.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([ Post, PostRepository ]),
  ],
  controllers: [ PostController ],
  providers:   [ PostService ],
  exports: [ PostService ],
})

export class PostModule {}
