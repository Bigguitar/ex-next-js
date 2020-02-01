import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User } from '../users/user.entity'

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public lat: string

  @Column()
  public lng: string

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date

  @OneToOne(
    () => User,
    user => user.address
  )
  public user: User
}
