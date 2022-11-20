import { DataSource } from 'typeorm';
import { Plaza } from '../entities/plaza.entity';


export const PlazaProviders = [
    {
        provides: 'PLAZA_REPOSITORY',
        useFactory: (dataSource: DataSource) =>
            dataSource.getRepository(Plaza),
        inject: ['DATA_SOURCE'],
    },
];