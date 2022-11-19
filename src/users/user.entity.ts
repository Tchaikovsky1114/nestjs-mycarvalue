import {AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('inserted User width id', this.id)
  }

  @AfterUpdate()
  logUpdate() {
    console.log('updated user with id', this.id)
  }

  @AfterRemove()
  logRemove() {
    console.log('removed User width id', this.id);
  }
}
