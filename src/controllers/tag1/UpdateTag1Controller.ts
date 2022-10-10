import { Request, Response } from "express";
import { UpdateTag1Service } from "../../services/tag1/UpdateTag1Service";

class UpdateTag1Controller{
   async handle(req: Request, res: Response){
      const tag1_id = req.query.tag1_id;
      
      const { tagName1 } = req.body;

      const updateTag1Service = new UpdateTag1Service();

         const tagUpdate1 = await updateTag1Service.execute({
            tag1_id,
            tagName1,
         });
   
         return res.json(tagUpdate1)
      }

   }

export {UpdateTag1Controller}