import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import config from './../config/database.config'
import { Usuario } from './../modules/usuario/entities/usuario.entity';
import { Propietario } from './../modules/propietario/entities/propietario.entity';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async (configService: ConfigType<typeof config>) => {
            const { username, host, database, password, port } = config().connect;
            const dataSource = new DataSource({
                type: 'mysql',
                host,
                port,
                username,
                password,
                database,
                entities: [Usuario, Propietario],
                synchronize: false,
                logging: false,
            });
            return dataSource.initialize();
        },
    },
];