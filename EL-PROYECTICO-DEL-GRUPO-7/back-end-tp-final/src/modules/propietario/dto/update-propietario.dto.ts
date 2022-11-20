import { PartialType } from '@nestjs/mapped-types';
import { CreatePropietarioDto } from './create-propietario.dto';

export class UpdatePropietarioDto extends PartialType(CreatePropietarioDto) { }