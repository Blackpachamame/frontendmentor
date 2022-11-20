import { Propietario } from 'src/modules/propietario/entities/propietario.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
/*
CREATE TABLE `estacionamiento` (
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `razon_social` varchar(45) DEFAULT NULL,
  `capacidad_maxima` int unsigned NOT NULL,
  `precio_base` int unsigned DEFAULT NULL,  
  `propietario_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `propietario_id_UNIQUE` (`propietario_id`),
  CONSTRAINT `propietario_id` FOREIGN KEY (`propietario_id`) REFERENCES `propietario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci; 

'horario_apertura` time NOT NULL,
`horario_cierre` time NOT NULL,
`dias_atencion` set('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado') DEFAULT NULL,
*/

@Entity('estacionamiento')
export class Estacionamiento extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    name: 'razon_social',
    length: 45,
    nullable: true,
    default: null,
  })
  razonSocial: string;

  @Column('int', { name: 'capacidad_maxima', nullable: false })
  capacidadMaxima: number;

  @OneToOne(() => Propietario, (propietario) => propietario.idUsuario)
  @JoinColumn({ name: 'propietario_id' })
  propietario: Propietario;

  @Column('float', {
    name: 'precio_base',
    default: 0.0,
    nullable: false,
  })
  precioBase: number;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
