import { EntityRepository, Repository } from 'typeorm';
import { Propietario } from '../entities/propietario.entity';


@EntityRepository(Propietario)
export class UsuarioRepository extends Repository<Propietario> { }