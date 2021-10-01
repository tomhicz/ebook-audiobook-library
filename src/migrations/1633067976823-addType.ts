import {MigrationInterface, QueryRunner} from "typeorm";

export class addType1633067976823 implements MigrationInterface {
    name = 'addType1633067976823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5e7f19d8fdf8425e9f4ae0dfae9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."book" ADD "typeId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."book" ADD CONSTRAINT "FK_d6217b70f6778481671c2e308bd" FOREIGN KEY ("typeId") REFERENCES "book_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."book" DROP CONSTRAINT "FK_d6217b70f6778481671c2e308bd"`);
        await queryRunner.query(`ALTER TABLE "public"."book" DROP COLUMN "typeId"`);
        await queryRunner.query(`DROP TABLE "book_type"`);
    }

}
