import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { PostRepository } from './post.repository'
import { InjectRepository } from '@nestjs/typeorm'
import Post from './post.entity'

@Injectable()
export class PostService {
  private logger = new Logger('PostService')

  constructor(
    @InjectRepository(PostRepository)
    private PostRepository: PostRepository) {}

    async getBlogPost( title: string): Promise<Post> {
      const found = await this.PostRepository.getBlogPost(title)
      if (!found) {
        throw new NotFoundException(`Blog post with title "${title.split('-').join(' ')}" not found.`)
      }
      return found
    }

    async getTitles(): Promise<Post[]> {
      const found = await this.PostRepository.getTitles()
      if (!found) {
        throw new NotFoundException(`There were no titles found at all.`)
      }
      return found
    }
}
