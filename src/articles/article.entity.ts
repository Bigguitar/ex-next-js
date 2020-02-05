import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Comment } from '../comments/comment.entity';
import { Category } from '../categories/category.entity';

@Entity('articles')
export class Article {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ length: 255 })
  public title: string;

  @Column({ type: 'text' })
  public body: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @OneToMany(
    () => Comment,
    comment => comment.article,
  )
  public comments: Comment[];

  @ManyToMany(
    () => Category,
    category => category.articles,
  )
  @JoinTable()
  public categories: Category[];
}
