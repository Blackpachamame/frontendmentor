import { Controller } from '@nestjs/common';
import { EstacionamientoService } from './estacionamiento.service';

@Controller('estacionamiento')
export class EstacionamientoController {
  constructor(private readonly estacionamientoService: EstacionamientoService) {}
}
