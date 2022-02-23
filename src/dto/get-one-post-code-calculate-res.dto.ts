export class GetOnePostCodeCalculateResDto {
  constructor(average: number, median: number) {
    this.payload = new PayloadOnePostCodeCalculateResDto(average, median)
  }
  public readonly payload: PayloadOnePostCodeCalculateResDto;
}

export class PayloadOnePostCodeCalculateResDto {
  constructor(average: number, median: number) {
    this.average = average
    this.median = median
  }
  public readonly average: number;
  public readonly median: number;
}