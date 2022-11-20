/*
CREATE TABLE `promocion` (
  `codigo_promocion` varchar(10) NOT NULL,
  `validez_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `validez_fin` timestamp NULL DEFAULT NULL,
  `precio_base` int unsigned NOT NULL,
  `descuento` int DEFAULT NULL,
  `tipo_descuento` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`codigo_promocion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('promocion')
export class Promocion {
    @PrimaryColumn('varchar', {
        name: 'codigo_promocion',
        nullable: false,
        length: 45
    })
    codigo: string

    @Column('int', {
        name: 'descuento',
        default: 0,
        nullable: false
    })
    descuento: number

    @Column('int', { name: 'precio_base' })
    precioBase: number

    @Column('varchar', { name: 'tipo_descuento' })
    tipoDescuento: string

    @Column('date', { name: 'validez_inicio' })
    validezInicio: Date
    @Column('date', { name: 'validez_fin' })
    validezFin: Date
}