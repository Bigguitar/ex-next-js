import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('articles')
export class Article {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ length: 255 })
  public title: string

  @Column({ type: 'text' })
  public body: string

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date
}
