import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from '../addresses/address.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @Column({ nullable: true })
  public addressId: number;

  @OneToOne(
    () => Address,
    address => address.user,
    { cascade: true },
  )
  @JoinColumn()
  public address: Address;
}
