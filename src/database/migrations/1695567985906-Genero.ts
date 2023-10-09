import {MigrationInterface, QueryRunner} from "typeorm";

export class Genero1695567985906 implements MigrationInterface {
    name = 'Genero1695567985906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Filme" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_345de4acf41fc44bc207b21cfc2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Genero" ("id" character varying NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_b829204c76a525595b67b4dc1f0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Locacao" ("id" character varying NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_b3c9d705d4515d3c4ac790e14d0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "admin" boolean NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "Locacao"`);
        await queryRunner.query(`DROP TABLE "Genero"`);
        await queryRunner.query(`DROP TABLE "Filme"`);
    }

}
