import { Expose} from 'class-transformer';
import { UpdateResult } from 'typeorm';
import { RECORD_UPDATED } from '../constants/responses';

export class UpdateHomeResDto {
  constructor(updateResult: UpdateResult) {
    this.payload = new PayloadUpdateHomeDto(updateResult)
  }
  payload: PayloadUpdateHomeDto
}

export class PayloadUpdateHomeDto {
  constructor(updateResult: UpdateResult) {
    this.affected = updateResult.affected || 0
    this.message = RECORD_UPDATED
  }
  @Expose()
  public affected: number;

  @Expose()
  public message: string;
}