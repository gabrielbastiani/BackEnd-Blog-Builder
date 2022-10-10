import { Request, Response } from "express";
import { UpdateTag3Service } from "../../services/tag3/UpdateTag3Service";

class UpdateTag3Controller{
   async handle(req: Request, res: Response){
      const tag3_id = req.query.tag3_id;
      
      const { tagName3 } = req.body;

      const updateTag3Service = new UpdateTag3Service();

         const tagUpdate3 = await updateTag3Service.execute({
            tag3_id,
            tagName3,
         });
   
         return res.json(tagUpdate3)
      }

   }

export {UpdateTag3Controller}