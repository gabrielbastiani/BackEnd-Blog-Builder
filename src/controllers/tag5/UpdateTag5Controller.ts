import { Request, Response } from "express";
import { UpdateTag5Service } from "../../services/tag5/UpdateTag5Service";

class UpdateTag5Controller{
   async handle(req: Request, res: Response){
      const tag5_id = req.query.tag5_id;
      
      const { tagName5 } = req.body;

      const updateTag5Service = new UpdateTag5Service();

         const tagUpdate5 = await updateTag5Service.execute({
            tag5_id,
            tagName5,
         });
   
         return res.json(tagUpdate5)
      }

   }

export {UpdateTag5Controller}