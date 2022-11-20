CREATE TABLE `propietario` (
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_time` timestamp NULL DEFAULT NULL,
    `delete_time` timestamp NULL DEFAULT NULL,
    `id_usuario` int DEFAULT NULL,
    `cuil` int DEFAULT NULL,
    `cuit` int DEFAULT NULL,
    `ingresos_brutos` int DEFAULT NULL,
    `cbu` varchar(45) DEFAULT NULL,
    KEY `index1` (`id_usuario`),
    CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;