import { IsNumber, IsString, validate } from 'class-validator';
import { Response, Request } from "express";


export class HomeBodyDto  {

  @IsString()
  name: string;

	@IsString()
	desc: string;
	
  @IsNumber()
	price: number;
	
	@IsString()
  post_code: string;

}

export const homeBodyValidate = (req: Request,res: Response,next: any) => {
	const body: any = req.body;
		const homeCreateBodyDto = new HomeBodyDto();
		homeCreateBodyDto.name = body.name
		homeCreateBodyDto.desc = body.desc
		homeCreateBodyDto.price = Number(body.price) // จาก ฟอมร์ของ https://codetest-pre-interview-frontend.pages.dev/ ส่ง price ที่เปน string มา จึง convert ให้
		homeCreateBodyDto.post_code = body.post_code
		validate(homeCreateBodyDto).then(errors => {
			console.log(errors, 'errors');
			if (!errors.length) next();
			else res.status(400).json(errors)
		});

}


