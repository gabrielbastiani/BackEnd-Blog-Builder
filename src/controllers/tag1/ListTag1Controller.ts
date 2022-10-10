import { Request, Response } from "express";
import { ListTag1Service } from "../../services/tag1/ListTag1Service";

class ListTag1Controller{
   async handle(req: Request, res: Response){
      const listTag1Service = new ListTag1Service();

      const tag1 = await listTag1Service.execute();

      return res.json(tag1);
      
   }
}

export {ListTag1Controller}