import { Router, Response, Request } from "express";
import { HomeService } from "../services/home.service";
export class PostCodeController {
  public router: Router;
  private homeService: HomeService; 

  constructor(){
    this.homeService = new HomeService();
    this.router = Router();
    this.routes();
  }

  public findAllPostCode = async (_: Request, res: Response) => {
    try {
      res.send(await this.homeService.findAllPostCode())
    } catch (error) {
      console.log(error,'error findAllPostCode');
      res.status(500).send('some unknown error');
    }
  } 

  public findOnePostCodeCalculate = async (req: Request, res: Response) => {
    try {
      const postCode: string = req.params.id;
      const homes = await this.homeService.findOnePostCodeCalculate(postCode);
      res.send(homes)
    } catch (error) {
      console.log(error,'error findOnePostCodeCalculate');
      res.status(500).send('some unknown error');
    }
  }

  public routes(){
    this.router.get('/', this.findAllPostCode);
    this.router.get('/:id', this.findOnePostCodeCalculate);
  }
}