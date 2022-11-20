CREATE TABLE `operador` (
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_time` timestamp NULL DEFAULT NULL,
    `delete_time` timestamp NULL DEFAULT NULL,
    `usuario_id` int NOT NULL,
    `legajo_empleado` varchar(10) NOT NULL,
    `estacionamiento_id` int NOT NULL,
    `horario_entrada` time DEFAULT NULL,
    `horario_salida` time DEFAULT NULL,
    PRIMARY KEY (`legajo_empleado`),
    KEY `usuario_id_idx` (`usuario_id`),
    CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;