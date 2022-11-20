import { DataSource } from 'typeorm';
import { Propietario } from '../entities/propietario.entity';


export const PropietarioProviders = [
    {
        provide: 'PROPIETARIO_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Propietario),
        inject: ['DATA_SOURCE'],
    },
];
