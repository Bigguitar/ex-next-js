import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Article } from '../articles/article.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'text' })
  public body: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @ManyToOne(
    () => Article,
    article => article.comments,
  )
  public article: Article;
}
