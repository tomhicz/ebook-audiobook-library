import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Author } from "./Author";
import { Service } from "./Service";
import { BookType } from "./BookType";

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

  @ManyToMany((type) => Service, {
    cascade: true,
  })
  @JoinTable()
  services: Service[];

  @ManyToOne(() => BookType, {
    cascade: true,
  })
  booktype: BookType;

  // @Column()
  // genres: []];

  // @Column()
  // tags: [];

  @Column({ default: false })
  read: boolean;
}
