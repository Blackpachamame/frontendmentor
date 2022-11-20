import { Module } from '@nestjs/common';
import { EstacionamientoService } from './estacionamiento.service';
import { EstacionamientoController } from './estacionamiento.controller';

@Module({
  controllers: [EstacionamientoController],
  providers: [EstacionamientoService]
})
export class EstacionamientoModule {}
