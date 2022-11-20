CREATE TABLE `estacionamiento` (
    `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_time` timestamp NULL DEFAULT NULL,
    `delete_time` timestamp NULL DEFAULT NULL,
    `id` int NOT NULL AUTO_INCREMENT,
    `razon_social` varchar(45) DEFAULT NULL,
    `capacidad_maxima` int unsigned NOT NULL,
    `horario_apertura` time NOT NULL,
    `horario_cierre` time NOT NULL,
    `percio_base` int unsigned DEFAULT NULL,
    `dias_atencion`
    set
        (
            'Lunes',
            'Martes',
            'Miercoles',
            'Jueves',
            'Viernes',
            'Sabado'
        ) DEFAULT NULL,
        `propietario_id` int NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE KEY `propietario_id_UNIQUE` (`propietario_id`),
        CONSTRAINT `propietario_id` FOREIGN KEY (`propietario_id`) REFERENCES `propietario` (`id_usuario`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;