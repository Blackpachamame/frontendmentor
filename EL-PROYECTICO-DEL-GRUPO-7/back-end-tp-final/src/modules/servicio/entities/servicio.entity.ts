/*
CREATE TABLE `servicio` (
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `codigo_reserva` varchar(10) NOT NULL,
  `hora_inicio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `hora_fin` timestamp NULL DEFAULT NULL,
  `precio_final` float unsigned DEFAULT '0',
  `codigo_promocion` varchar(10) DEFAULT NULL,
  `codigo_plan_especial` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `codigo_reserva_servicio_idx` (`codigo_reserva`),
  KEY `plan_mensual_idx` (`codigo_plan_especial`),
  KEY `promo_idx` (`codigo_promocion`),
  CONSTRAINT `codigo_reserva_servicio` FOREIGN KEY (`codigo_reserva`) REFERENCES `reserva` (`codigo_reserva`),
  CONSTRAINT `plan_mensual` FOREIGN KEY (`codigo_plan_especial`) REFERENCES `plan_mensual` (`codigo_plan_especial`),
  CONSTRAINT `promo` FOREIGN KEY (`codigo_promocion`) REFERENCES `promocion` (`codigo_promocion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/

import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('servicio')
export class Servicio {
    @PrimaryGeneratedColumn()
    id: number

    codigoReserva: string
}