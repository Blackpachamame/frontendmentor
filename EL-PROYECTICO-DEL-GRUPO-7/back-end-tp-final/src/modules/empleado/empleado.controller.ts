import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { EmpleadoService } from './empleado.service';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) { }

  @Post()
  async create(
    @Body() payload: CreateEmpleadoDto
  ) {
    return await this.empleadoService.createNewEmpleado(payload)
  }

  @Get()
  async findAll() {
    return await this.empleadoService.findAllEmployees();
  }

  @Get(':id')
  async findOneById(@Param('legajo') legajo: string) {
    return await this.empleadoService.findEmployeeByLegajo(legajo);
  }

  @Patch(':id')
  async updateById(
    @Param('legajo') legajo: string,
    @Body() updatedEmployee: UpdateEmpleadoDto
  ) {
    return await this.empleadoService.updateEmployeeByLegajo(updatedEmployee, legajo)
  }
}
