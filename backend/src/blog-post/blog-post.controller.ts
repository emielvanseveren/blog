import { Controller, Get, ParseIntPipe, Param } from '@nestjs/common'
import { BlogPostService } from './blog-post.service'
import BlogPost from './blog-post.entity'

@Controller('blog-post')
export class BlogPostController{
  constructor(private BlogPostService: BlogPostService){ }


  @Get('/:id')
  getBlogPost(@Param('id', ParseIntPipe) id: number): Promise<BlogPost>{
    return this.BlogPostService.getBlogPost(id)
  }

  @Get('/titles')
  getTitles(): Promise<BlogPost[]>{
    return this.BlogPostService.getTitles()
  }
}