import { getConnection } from 'typeorm';
import { DBconfig } from '../config';
import { HomeEntity } from '../database/entities/home.entity';
import { CreateHomeResDto } from '../dto/create-home-res.dto';
import { DeleteHomeResDto } from '../dto/delete-home-res.dto';
import { GetHomeResDto } from '../dto/get-home-res.dto';
import { GetOnePostCodeCalculateResDto } from '../dto/get-one-post-code-calculate-res.dto';
import { GetPostCodeResDto } from '../dto/get-post-code-res.dto';
import { UpdateHomeResDto } from '../dto/update-home-res.dto';
import { HomeRepository } from '../repository/home.repository';

export class HomeService {
  private homeRepository: HomeRepository;

  constructor(){
    this.homeRepository = getConnection(DBconfig.name).getCustomRepository(HomeRepository);
  }

  public async findAll(take: number,skip: number): Promise<GetHomeResDto> {
    return new GetHomeResDto(await this.homeRepository.find({take,skip,order: {'created_at': 'DESC'}}))
  } 

    public async findAllPostCode(): Promise<GetPostCodeResDto> {
    const homes: HomeEntity[] = await this.homeRepository.find({ select: ['post_code'] })
    const uniqePostCode: string[] = [...new Set(homes.map((homeEntity: HomeEntity) => homeEntity.post_code))];
    return new GetPostCodeResDto(uniqePostCode)
  } 

  public async findOnePostCodeCalculate (postCode: string): Promise<GetOnePostCodeCalculateResDto> {
    const homes: HomeEntity[] = await this.homeRepository.find({ select: ['post_code', 'price'], where: { post_code: postCode } });
    const average: number = this.calAverage(homes)
    const median: number = this.calMedian(homes)
    console.log(average,median,'average,median');
    
    return new GetOnePostCodeCalculateResDto(average, median)
  } 

  private calAverage(homes: HomeEntity[]): number {
    const sumPrice: number = homes.reduce((total: number, home: HomeEntity) => { return total + home.price }, 0)
    return sumPrice/homes.length
  }

  private calMedian(homes: HomeEntity[]): number {
    homes.sort((a: HomeEntity, b: HomeEntity) => Number(a.price) > Number(b.price) ? 1 : -1)
    if (homes.length == 1) {
      return homes[0].price
    }else if (homes.length % 2 > 0) {
      const medeianOdd: number = Math.floor(homes.length / 2);
      return homes[medeianOdd].price
    } else {
      const medeianEven: number = Math.floor(homes.length / 2);
      return (homes[medeianEven].price + homes[medeianEven + 1].price) / 2;
    }
  }

  public async create (home: HomeEntity): Promise<CreateHomeResDto>{
    return new CreateHomeResDto(await this.homeRepository.save(home));
  } 

  public async update (home: HomeEntity, id: number): Promise<UpdateHomeResDto>{
    return new UpdateHomeResDto(await this.homeRepository.update(id, home));
  } 

  public async delete (id: number): Promise<DeleteHomeResDto>{
    return new DeleteHomeResDto(await this.homeRepository.delete(id));
  } 

}