import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({
    nullable: true,
  })
  imageLink: string;

  @Column({
    nullable: true,
  })
  isbn: string;

  // @Column()
  // services: [];

  // @Column()
  // types: []];

  // @Column()
  // genres: []];

  // @Column()
  // tags: [];

  @Column({ default: false })
  read: boolean;
}
