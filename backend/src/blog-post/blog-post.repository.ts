import { Repository, EntityRepository } from 'typeorm'
import BlogPost from './blog-post.entity'

@EntityRepository(BlogPost)
export class BlogPostRepository extends Repository<BlogPost> {

  async getBlogPost(id: number ) : Promise<BlogPost> {
    const blogPost = await this.findOne({
      where:  { id },
    })
    return blogPost
  }

  async getTitles() : Promise<BlogPost[]> {
    const titles = await this.find({
      select: [ 'title', 'date', 'readTime' ],
      take: 50
    })
    return titles
  }
}