import { Entity, EntityRepository, Repository } from "typeorm";
import { Estacionamiento } from "../entitites/estacionamiento.entity";

@EntityRepository(Estacionamiento)
export class EstacionamientoRepository extends Repository<Estacionamiento>{ }