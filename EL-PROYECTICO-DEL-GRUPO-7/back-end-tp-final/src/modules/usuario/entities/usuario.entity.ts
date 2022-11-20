import { TimestampProvider } from 'rxjs';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Model:* 
 CREATE TABLE `usuario` (
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  `password` varchar(15) NOT NULL,
  `token` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `role` enum('client','owner','employee','admin') NOT NULL DEFAULT 'client',
  `dni` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_UNIQUE` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='En esta tabla se almacena los datos de los usuarios, '
 */

export enum role {
  CLIENT = 'client',
  OWNER = 'owner',
  EMPLOYEE = 'employee',
  ADMIN = 'admin',
}

@Entity({ name: 'usuario' })
export class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    name: 'username',
    length: 25,
    nullable: false,
    unique: true,
  })
  username: string;

  @Column('varchar', { name: 'password', length: 15, nullable: false })
  password: string;

  @Column('varchar', {
    name: 'token',
    length: 45,
    nullable: true,
    default: null,
  })
  token: string;

  @Column('varchar', {
    name: 'email',
    length: 45,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column('enum', { enum: role, enumName: 'role', default: role.CLIENT })
  role: string;

  @CreateDateColumn({ name: 'create_time', nullable: false })
  createdAt: TimestampProvider;
  @UpdateDateColumn({ name: 'update_time', nullable: false, default: null })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'delete_time', nullable: false, default: null })
  deletedAt: Date;
}

/* 

  @Column('varchar', { name: 'first_name', length: 45, nullable: false })
  firstName: string;

  @Column("varchar", { name: 'last_name', length: 45, nullable: false })
  lastName: string;

  @Column('int', { name: 'id_card_number', nullable: false, unique: true })
  dni: number;

*/
