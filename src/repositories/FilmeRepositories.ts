import { EntityRepository, Repository } from "typeorm";
import { Filme } from "../entities/Filme";

@EntityRepository(Filme)
class FilmeRepositories extends Repository<Filme> {}

export { FilmeRepositories };