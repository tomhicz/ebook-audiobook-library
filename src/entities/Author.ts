import {
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} from "typeorm";

@Entity()
@Index(["first_name", "last_name"], { unique: true })
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column({
    nullable: true,
  })
  last_name: string;
}
