import {MigrationInterface, QueryRunner} from "typeorm";

export class setUniqueServiceName1633153323408 implements MigrationInterface {
    name = 'setUniqueServiceName1633153323408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_7806a14d42c3244064b4a1706c" ON "public"."service" ("name") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_7806a14d42c3244064b4a1706c"`);
    }

}
