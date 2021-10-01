import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyToBookType1633068231566 implements MigrationInterface {
    name = 'modifyToBookType1633068231566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."book" DROP CONSTRAINT "FK_d6217b70f6778481671c2e308bd"`);
        await queryRunner.query(`ALTER TABLE "public"."book" RENAME COLUMN "typeId" TO "booktypeId"`);
        await queryRunner.query(`ALTER TABLE "public"."book" ADD CONSTRAINT "FK_dc255ac045c85fafd3ec486cbff" FOREIGN KEY ("booktypeId") REFERENCES "book_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."book" DROP CONSTRAINT "FK_dc255ac045c85fafd3ec486cbff"`);
        await queryRunner.query(`ALTER TABLE "public"."book" RENAME COLUMN "booktypeId" TO "typeId"`);
        await queryRunner.query(`ALTER TABLE "public"."book" ADD CONSTRAINT "FK_d6217b70f6778481671c2e308bd" FOREIGN KEY ("typeId") REFERENCES "book_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
