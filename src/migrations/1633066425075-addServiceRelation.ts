import {MigrationInterface, QueryRunner} from "typeorm";

export class addServiceRelation1633066425075 implements MigrationInterface {
    name = 'addServiceRelation1633066425075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book_services_service" ("bookId" integer NOT NULL, "serviceId" integer NOT NULL, CONSTRAINT "PK_fcea2b1ab9d451f9e9462fff03c" PRIMARY KEY ("bookId", "serviceId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_072de1a239deae3d1a7e914efc" ON "book_services_service" ("bookId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a952b83b52f415d69191e968c2" ON "book_services_service" ("serviceId") `);
        await queryRunner.query(`ALTER TABLE "book_services_service" ADD CONSTRAINT "FK_072de1a239deae3d1a7e914efcf" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_services_service" ADD CONSTRAINT "FK_a952b83b52f415d69191e968c2c" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_services_service" DROP CONSTRAINT "FK_a952b83b52f415d69191e968c2c"`);
        await queryRunner.query(`ALTER TABLE "book_services_service" DROP CONSTRAINT "FK_072de1a239deae3d1a7e914efcf"`);
        await queryRunner.query(`DROP INDEX "IDX_a952b83b52f415d69191e968c2"`);
        await queryRunner.query(`DROP INDEX "IDX_072de1a239deae3d1a7e914efc"`);
        await queryRunner.query(`DROP TABLE "book_services_service"`);
    }

}
