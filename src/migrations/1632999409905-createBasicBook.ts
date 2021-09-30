import {MigrationInterface, QueryRunner} from "typeorm";

export class createBasicBook1632999409905 implements MigrationInterface {
    name = 'createBasicBook1632999409905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "author" character varying NOT NULL, "imageLink" character varying, "isbn" character varying, "read" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "book"`);
    }

}
