import { Repository, EntityRepository } from 'typeorm'
import Post from './post.entity'

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {

  async getBlogPost(id: number ) : Promise<Post> {
    const Post = await this.findOne({
      where:  { postId: id },
    })
    return Post
  }

  async getTitles() : Promise<Post[]> {
    const titles = await this.find({
      select: [ 'postId', 'title', 'date', 'read'],
      take: 50
    })
    return titles
  }
}