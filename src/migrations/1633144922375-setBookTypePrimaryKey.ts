import {MigrationInterface, QueryRunner} from "typeorm";

export class setBookTypePrimaryKey1633144922375 implements MigrationInterface {
    name = 'setBookTypePrimaryKey1633144922375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."book" DROP CONSTRAINT "FK_dc255ac045c85fafd3ec486cbff"`);
        await queryRunner.query(`ALTER TABLE "public"."book" RENAME COLUMN "booktypeId" TO "booktypeName"`);
        await queryRunner.query(`ALTER TABLE "public"."book_type" DROP CONSTRAINT "PK_5e7f19d8fdf8425e9f4ae0dfae9"`);
        await queryRunner.query(`ALTER TABLE "public"."book_type" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."book_type" ADD CONSTRAINT "PK_e2330d35bfec89dc82e0c07437a" PRIMARY KEY ("name")`);
        await queryRunner.query(`ALTER TABLE "public"."book" DROP COLUMN "booktypeName"`);
        await queryRunner.query(`ALTER TABLE "public"."book" ADD "booktypeName" character varying`);
        await queryRunner.query(`ALTER TABLE "public"."book" ADD CONSTRAINT "FK_1ab306e619d93b07827016f5ab4" FOREIGN KEY ("booktypeName") REFERENCES "book_type"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."book" DROP CONSTRAINT "FK_1ab306e619d93b07827016f5ab4"`);
        await queryRunner.query(`ALTER TABLE "public"."book" DROP COLUMN "booktypeName"`);
        await queryRunner.query(`ALTER TABLE "public"."book" ADD "booktypeName" integer`);
        await queryRunner.query(`ALTER TABLE "public"."book_type" DROP CONSTRAINT "PK_e2330d35bfec89dc82e0c07437a"`);
        await queryRunner.query(`ALTER TABLE "public"."book_type" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."book_type" ADD CONSTRAINT "PK_5e7f19d8fdf8425e9f4ae0dfae9" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."book" RENAME COLUMN "booktypeName" TO "booktypeId"`);
        await queryRunner.query(`ALTER TABLE "public"."book" ADD CONSTRAINT "FK_dc255ac045c85fafd3ec486cbff" FOREIGN KEY ("booktypeId") REFERENCES "book_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
