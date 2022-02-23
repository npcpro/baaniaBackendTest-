import { Expose} from 'class-transformer';
import { RECORD_CREATED } from '../constants/responses';
import { HomeEntity } from '../database/entities/home.entity';

export class CreateHomeResDto {
  constructor(homeEntity: HomeEntity) {
    this.payload = new PayloadCreateHomeDto(homeEntity)
  }
  payload: PayloadCreateHomeDto
}

export class PayloadCreateHomeDto {
  constructor(homeEntity: HomeEntity) {
    this.id = homeEntity.id
    this.message = RECORD_CREATED
  }
  @Expose()
  public id: number;

  @Expose()
  public message: string;
}