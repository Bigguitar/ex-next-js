import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  public id: number
}
