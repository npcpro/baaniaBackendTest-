import { EntityRepository, Repository } from "typeorm";
import { HomeEntity } from "../database/entities/home.entity";

@EntityRepository(HomeEntity)
export class HomeRepository extends Repository<HomeEntity> {

}