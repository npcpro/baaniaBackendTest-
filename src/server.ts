import express, {Request, Response} from 'express';
import { HomeController } from './controller/home.controller';
import { createConnection } from "typeorm";
import { DBconfig } from './config';

class Server {
  private homeController: HomeController;
  private app: express.Application;

  constructor(){
    this.app = express();
    this.configuration();
    this.routes();
  }

  public configuration() {
    this.app.set('port', 8000);
    this.app.use(express.json());
  }

  public async routes() {
    console.log(DBconfig,'DBconfig');
    
    await createConnection({
      type: DBconfig.type,
      host: DBconfig.host,
      port: DBconfig.port,
      username: DBconfig.username,
      password: DBconfig.password,
      database: DBconfig.database,
      entities: DBconfig.entities,
      synchronize: DBconfig.synchronize,
      name: DBconfig.name
    });

    this.homeController = new HomeController();

    this.app.get( "/", (req: Request, res: Response ) => {
      res.send( "Hello world!" );
    });

    this.app.use(`/home/`,this.homeController.router);
  }

  public start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    });
  }
}

const server = new Server();
server.start(); 
