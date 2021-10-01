import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Author } from "./Author";

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(() => Author, {
    cascade: true,
  })
  @JoinTable()
  authors: Author[];

  @Column({
    nullable: true,
  })
  imageurl: string;

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
