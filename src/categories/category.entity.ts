import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Article } from '../articles/article.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @ManyToMany(
    () => Article,
    article => article.categories,
  )
  public articles: Article[];
}
