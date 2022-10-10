import { Request, Response } from "express";
import { ListTag4Service } from "../../services/tag4/ListTag4Service";

class ListTag4Controller{
   async handle(req: Request, res: Response){
      const listTag4Service = new ListTag4Service();

      const tag4 = await listTag4Service.execute();

      return res.json(tag4);
      
   }
}

export {ListTag4Controller}