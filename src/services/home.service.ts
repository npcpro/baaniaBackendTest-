import { getConnection } from 'typeorm';
import { HomeEntity } from '../database/entities/home.entity';
import { HomeRepository } from '../repository/home.repository';

export class HomeService {
  private homeRepository: HomeRepository;

  constructor(){
    this.homeRepository = getConnection("baania").getCustomRepository(HomeRepository);
  }

  public findAll = async () => {
    const homes = await this.homeRepository.find()
    return homes;
  } 

  public create = async (home: HomeEntity) => {
    const newHome = await this.homeRepository.save(home);
    return newHome;
  } 

  public update =  async(home: HomeEntity, id: number) => {
    const updatedHome = await this.homeRepository.update(id, home);
    return updatedHome;
  } 

  public delete = async (id: number) => {
    const deletedHome = await this.homeRepository.delete(id);
    return deletedHome;
  } 
}