import { Request, Response } from "express";
import { ListTag5Service } from "../../services/tag5/ListTag5Service";

class ListTag5Controller{
   async handle(req: Request, res: Response){
      const listTag5Service = new ListTag5Service();

      const tag5 = await listTag5Service.execute();

      return res.json(tag5);
      
   }
}

export {ListTag5Controller}