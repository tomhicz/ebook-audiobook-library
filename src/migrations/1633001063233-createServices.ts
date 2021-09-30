import {MigrationInterface, QueryRunner} from "typeorm";

export class createServices1633001063233 implements MigrationInterface {
    name = 'createServices1633001063233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "service" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "mainurl" character varying, "baseurl" character varying, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "service"`);
    }

}
