import {
  Entity,
  PrimaryGeneratedColumn,
  Index,
  Column,
  BaseEntity,
} from "typeorm";

@Entity()
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  mainurl: string;

  @Column({
    nullable: true,
  })
  baseurl: string;
}
