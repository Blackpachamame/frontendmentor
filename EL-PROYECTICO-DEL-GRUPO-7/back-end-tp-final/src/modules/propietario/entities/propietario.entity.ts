import { Usuario } from "./../../usuario/entities/usuario.entity";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

/*
CREATE TABLE `propietario` (
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,/
  `update_time` timestamp NULL DEFAULT NULL,/
  `delete_time` timestamp NULL DEFAULT NULL,/
  `id_usuario` int DEFAULT NULL,/
  `cuil` int DEFAULT NULL,
  `cuit` int DEFAULT NULL,
  `ingresos_brutos` int DEFAULT NULL,
  `cbu` varchar(45) DEFAULT NULL,
  KEY `index1` (`id_usuario`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci*/

@Entity({ name: 'propietario' })
export class Propietario extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(() => Usuario, (Usuario) => Usuario.id)
  @JoinColumn({ name: 'id_usuario' })
  idUsuario: number | null;

  @Column('int', { name: 'cuil', nullable: true, default: null })
  cuil: number | null;

  @Column('int', { name: 'cuit', nullable: true, default: null })
  cuit: number | null;

  @Column('int', { name: 'ingresos_brutos', nullable: true, default: null })
  ingresosBrutos: number | null;

  @Column('varchar', { name: 'cbu', length: 45, nullable: true, default: null })
  cbu: string | null;

  @CreateDateColumn({ name: 'create_time', nullable: false })
  createdAt: Date;
  @UpdateDateColumn({ name: 'update_time', nullable: false, default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'delete_time', nullable: false, default: null })
  deletedAt: Date;
}