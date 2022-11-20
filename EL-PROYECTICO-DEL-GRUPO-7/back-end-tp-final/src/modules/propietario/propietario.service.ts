import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreatePropietarioDto } from "./dto/create-propietario.dto";
import { UpdatePropietarioDto } from "./dto/update-propietario.dto";
import { Propietario } from "./entities/propietario.entity";

@Injectable()
export class PropietarioService {
    constructor(
        @Inject('PROPIETARIO_REPOSITORY')
        private readonly propietarioRepo: Repository<Propietario>
    ) { }

    async createNewOwner(payload: CreatePropietarioDto): Promise<Propietario> {
        const newOwner = await this.propietarioRepo.save(payload)
        return newOwner
    }
    async updateOwner(payload: UpdatePropietarioDto, id: number) {
        await this.propietarioRepo.update(id, payload)
        const updatedOwner = await this.propietarioRepo.find({
            where: { id },
            relations: []
        })
        return updatedOwner
    }
}
