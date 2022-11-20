import { Controller } from '@nestjs/common';
import { PropietarioService } from './propietario.service';

@Controller('propietario')
export class PropietarioController {
  constructor(private readonly propietarioService: PropietarioService) {}
}
