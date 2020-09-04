import {MigrationInterface, QueryRunner} from "typeorm";

export class AddBlogsTable1599216497204 implements MigrationInterface {
    name = 'AddBlogsTable1599216497204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `blog` (`uuid` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `title` varchar(255) NOT NULL, `content` varchar(255) NOT NULL, PRIMARY KEY (`uuid`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `blog`");
    }

}
