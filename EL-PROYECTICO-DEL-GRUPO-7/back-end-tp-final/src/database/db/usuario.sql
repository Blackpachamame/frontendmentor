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
    `role` enum('client', 'owner', 'employee', 'admin') NOT NULL DEFAULT 'client',
    `dni` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `token_UNIQUE` (`token`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = 'En esta tabla se almacena los datos de los usuarios, ';