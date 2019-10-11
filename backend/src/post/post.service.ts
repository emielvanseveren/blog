import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { PostRepository } from './post.repository'
import { InjectRepository } from '@nestjs/typeorm'
import Post from './post.entity'

@Injectable()
export class PostService {
  private logger = new Logger('BlogPostService')

  constructor(
    @InjectRepository(PostRepository)
    private PostRepository: PostRepository) {}

    async getBlogPost( id: number): Promise<Post>{
      const found = await this.PostRepository.getBlogPost(id)
      if(!found) {
        throw new NotFoundException(`Blog post with ID "${id}" not found.`)
      }
      return found
    }
    async getTitles(): Promise<Post[]>{
      const found = await this.PostRepository.getTitles()
        if(!found){
          throw new NotFoundException(`There were no titles found at all.`)
        }
        return found
    }
}