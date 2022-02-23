export class GetPostCodeResDto {
  constructor(post_codes: string[]) {
    this.payload = post_codes.map((post_code: string) => new PayloadPostCodeDto(post_code));
    this.count = post_codes.length;
  }
  public readonly payload: PayloadPostCodeDto[];
  public readonly count: number;
  
}

export class PayloadPostCodeDto {
  constructor(post_codes: string) {
    this.post_code = post_codes
  }

  public readonly post_code: string;
}