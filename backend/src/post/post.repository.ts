import { Repository, EntityRepository } from 'typeorm'
import Post from './post.entity'

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {

  async getBlogPost(title: string ): Promise<Post> {
    const search = title.split('-').join(" ")
    const Post = await this.createQueryBuilder("post").where('LOWER(title) = LOWER(:title)', { title: search }).getOne()
    return Post
  }
  async getTitles(): Promise<Post[]> {
    const titles = await this.find({
      select: [ 'title', 'description', 'date', 'read'],
      take: 50,
      order: { date: 'DESC'},
    })
    return titles
  }

}
