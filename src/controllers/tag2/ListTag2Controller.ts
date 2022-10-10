import { Request, Response } from "express";
import { ListTag2Service } from "../../services/tag2/ListTag2Service";

class ListTag2Controller{
   async handle(req: Request, res: Response){
      const listTag2Service = new ListTag2Service();

      const tag2 = await listTag2Service.execute();

      return res.json(tag2);
      
   }
}

export {ListTag2Controller}