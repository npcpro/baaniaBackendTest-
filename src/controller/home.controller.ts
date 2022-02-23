import { Router, Response, Request } from "express";
import { HomeEntity } from "../database/entities/home.entity";
import { HomeService } from "../services/home.service";
import { homeBodyValidate } from "../validator/home-validator";
export class HomeController {
  public router: Router;
  private homeService: HomeService; 

  constructor(){
    this.homeService = new HomeService();
    this.router = Router();
    this.routes();
  }

  public findAll = async (req: Request, res: Response) => {
    try {
      const take: number = req.query.take ? Number(req.query.take) : 0;
      const skip: number = req.query.skip ? Number(req.query.skip) : 0;
      const homes = await this.homeService.findAll(take, skip);
      res.send(homes)
    } catch (error) {
      console.log(error,'error findAll');
      res.status(500).send('some unknown error');
    }

  } 

  public create = async (req: Request, res: Response) => {
    try {
      const home = req['body'] as HomeEntity;
      const newHome = await this.homeService.create(home);
      res.send(newHome);
    } catch (error) {
      console.log(error,'error create');
      res.status(500).send('some unknown error');
    }
  }

  public update = async (req: Request, res: Response) => {
    try {
      const home = req['body'] as HomeEntity;
      const id = req['params']['id'];
      res.send(this.homeService.update(home, Number(id)));
    } catch (error) {
      console.log(error,'error update');
      res.status(500).send('some unknown error');
    }
  }

  public delete = async (req: Request, res: Response) => {
    try {
      const id =  req['params']['id'];
      res.send(this.homeService.delete(Number(id)));
    } catch (error) {
      console.log(error,'error delete');
      res.status(500).send('some unknown error');
    }
  } 

  public routes(){
    this.router.get('/', this.findAll);
    this.router.post('/', homeBodyValidate, this.create);
    this.router.patch('/:id', homeBodyValidate, this.update);
    this.router.delete('/:id', this.delete);
  }
}