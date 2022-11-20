import { EntityRepository, Repository } from "typeorm";
import { Plaza } from "../entities/plaza.entity";

@EntityRepository(Plaza)
export class PlazaRepository extends Repository<Plaza> { }