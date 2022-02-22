import { Router, Response, Request } from "express";
import { HomeEntity } from "../database/entities/home.entity";
import { HomeService } from "../services/home.service";
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
      const query: any = req.query;
      console.log(query,'query');
      
      const homes = await this.homeService.findAll();
      console.log(homes,'homes');
      res.send(homes).json();
    } catch (error) {
      console.log(error,'error');
      res.status(500).send('some unknown error');
    }

  } 

  public create = async (req: Request, res: Response) => {
    try {
      const home = req['body'] as HomeEntity;
      const newHome = await this.homeService.create(home);
      res.send(newHome);
    } catch (error) {
      console.log(error,'error');
      res.status(500).send('some unknown error');
    }
  }

  public update = async (req: Request, res: Response) => {
    try {
      const home = req['body'] as HomeEntity;
      const id =  req['params']['id'];
      res.send(this.homeService.update(home, Number(id)));
    } catch (error) {
      console.log(error,'error');
      res.status(500).send('some unknown error');
    }
  }

  public delete = async (req: Request, res: Response) => {
    try {
      const id =  req['params']['id'];
      res.send(this.homeService.delete(Number(id)));
    } catch (error) {
      console.log(error,'error');
      res.status(500).send('some unknown error');
    }
  } 

  public routes(){
    this.router.get('/', this.findAll);
    this.router.post('/', this.create);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }
}