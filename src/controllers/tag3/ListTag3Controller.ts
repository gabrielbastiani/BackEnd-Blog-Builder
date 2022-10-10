import { Request, Response } from "express";
import { ListTag3Service } from "../../services/tag3/ListTag3Service";

class ListTag3Controller{
   async handle(req: Request, res: Response){
      const listTag3Service = new ListTag3Service();

      const tag3 = await listTag3Service.execute();

      return res.json(tag3);
      
   }
}

export {ListTag3Controller}