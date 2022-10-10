import { Request, Response } from "express";
import { UpdateTag2Service } from "../../services/tag2/UpdateTag2Service";

class UpdateTag2Controller{
   async handle(req: Request, res: Response){
      const tag2_id = req.query.tag2_id;
      
      const { tagName2 } = req.body;

      const updateTag2Service = new UpdateTag2Service();

         const tagUpdate2 = await updateTag2Service.execute({
            tag2_id,
            tagName2,
         });
   
         return res.json(tagUpdate2)
      }

   }

export {UpdateTag2Controller}