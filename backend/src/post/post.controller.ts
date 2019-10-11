import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common'
import { PostService } from './post.service'
import Post from './post.entity'

@Controller('post')
export class PostController{
  constructor(private PostService: PostService){ }

  @Get('/titles')
  getTitles(): Promise<Post[]>{
    return this.PostService.getTitles()
  }

  @Get('/:id')
  getBlogPost(@Param('id', ParseIntPipe) id: number): Promise<Post>{
    return this.PostService.getBlogPost(id)
  }
}