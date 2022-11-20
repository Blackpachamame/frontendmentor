/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoProviders } from './providers/empleado.providers';

@Module({
  controllers: [EmpleadoController],
  providers: [EmpleadoService, ...EmpleadoProviders],
  exports: [EmpleadoService],
})
export class EmpleadoModule { }
