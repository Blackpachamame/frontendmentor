import { Injectable } from '@nestjs/common';

@Injectable()
export class EmpleadoService {
    async createNewEmpleado(payload) { }
    async findAllEmployees() { }
    async findEmployeeByLegajo(legajo) { }
    async updateEmployeeByLegajo(updatedEmployee, legajo) { }
}
