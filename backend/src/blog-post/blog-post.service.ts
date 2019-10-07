import { inJectable, Logger, Injectable, NotFoundException } from '@nestjs/common'
import { BlogPostRepository } from './blog-post.repository'
import { InjectRepository } from '@nestjs/typeorm'
import BlogPost from './blog-post.entity'

@Injectable()
export class BlogPostService {
  private logger = new Logger('BlogPostService')

  constructor(
    @InjectRepository(BlogPostRepository)
    private BlogPostRepository: BlogPostRepository) {}

    async getBlogPost( id: number): Promise<BlogPost>{
      const found = await this.BlogPostRepository.getBlogPost(id)
      if(!found) {
        throw new NotFoundException(`Blog post with ID "${id}" not found.`)
      }
      return found
    }
    async getTitles(): Promise<BlogPost[]>{
      const found = await this.BlogPostRepository.getTitles()
        if(!found){
          throw new NotFoundException(`There were no titles found at all.`)
        }
        return found
    }
}