import { Request, Response } from "express";
import { UpdateTag4Service } from "../../services/tag4/UpdateTag4Service";

class UpdateTag4Controller{
   async handle(req: Request, res: Response){
      const tag4_id = req.query.tag4_id;
      
      const { tagName4 } = req.body;

      const updateTag4Service = new UpdateTag4Service();

         const tagUpdate4 = await updateTag4Service.execute({
            tag4_id,
            tagName4,
         });
   
         return res.json(tagUpdate4)
      }

   }

export {UpdateTag4Controller}