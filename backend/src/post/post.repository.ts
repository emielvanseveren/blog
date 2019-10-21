import { Repository, EntityRepository } from 'typeorm'
import Post from './post.entity'

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {

  async getBlogPost(id: number ): Promise<Post> {
    const Post = await this.findOne({
      where:  { postId: id },
    })
    return Post
  }

  async getTitle(id: number): Promise<Post> {
    const title = await this.findOne({
      select: ['title'],
      where: { postId: id },
    })
    return title
  }

  async getTitles(): Promise<Post[]> {
    const titles = await this.find({
      select: [ 'postId', 'title', 'description', 'date', 'read'],
      take: 50,
      order: { date: 'DESC'},
    })
    return titles
  }

}
