import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class BookType extends BaseEntity {
  @PrimaryColumn()
  name: string;
}
