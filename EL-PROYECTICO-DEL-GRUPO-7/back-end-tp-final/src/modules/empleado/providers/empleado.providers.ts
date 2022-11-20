import { DataSource } from 'typeorm';
import { Empleado } from '../entities/empleado.entity';

export const EmpleadoProviders = [
  {
    provide: 'EMPLEADO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Empleado),
    inject: ['DATA_SOURCE'],
  },
];
