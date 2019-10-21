import { Entity, Column, BaseEntity, Unique, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
@Unique(['postId'])
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  postId: number

  @Column()
  title: string

  @Column()
  description: string

  @Column({ default: new Date(0)})
  date: Date

  @Column()
  read: number

  @Column()
  body: string
}
