import { Expose} from 'class-transformer';
import { DeleteResult } from 'typeorm';
import { RECORD_DELETED } from '../constants/responses';

export class DeleteHomeResDto {
  constructor(updateResult: DeleteResult) {
    this.payload = new PayloadDeleteHomeDto(updateResult)
  }
  payload: PayloadDeleteHomeDto
}

export class PayloadDeleteHomeDto {
  constructor(updateResult: DeleteResult) {
    this.affected = updateResult.affected || 0
    this.message = RECORD_DELETED
  }
  @Expose()
  public affected: number;

  @Expose()
  public message: string;
}