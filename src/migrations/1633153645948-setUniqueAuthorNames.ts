import {MigrationInterface, QueryRunner} from "typeorm";

export class setUniqueAuthorNames1633153645948 implements MigrationInterface {
    name = 'setUniqueAuthorNames1633153645948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_13b9a457c377e9f342e3b060f4" ON "public"."author" ("first_name", "last_name") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_13b9a457c377e9f342e3b060f4"`);
    }

}
