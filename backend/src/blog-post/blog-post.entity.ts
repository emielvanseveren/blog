import { Entity, Column, BaseEntity, Unique, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
@Unique(['id'])
export default class BlogPost extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ default: new Date(0)})
  date: Date

  @Column()
  readTime: string
}
