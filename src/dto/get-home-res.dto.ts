import { HomeEntity } from "../database/entities/home.entity";

export class GetHomeResDto {
  constructor(homeEntities: HomeEntity[]) {
    this.payload = homeEntities.map((homeEntity: HomeEntity) => new PayloadHomeDto(homeEntity));
    this.count = homeEntities.length;
  }
  public readonly payload: PayloadHomeDto[];
  public readonly count: number;
  
}

export class PayloadHomeDto {
  constructor(homeEntity: HomeEntity) {
    Object.assign(this, homeEntity);
  }
  public readonly id: number;
  public readonly name: string;
  public readonly price: number;
  public readonly post_code: string;
  public readonly created_at: Date;
  public readonly updated_at: Date;
}