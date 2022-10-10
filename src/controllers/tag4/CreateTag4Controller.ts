import {Request, Response} from 'express'
import { CreateTag4Service } from '../../services/tag4/CreateTag4Service'

class CreateTag4Controller {
  async handle(req: Request, res: Response){
    const { tagName4, name } = req.body;

    const createTag4Service = new CreateTag4Service();

    const tag4 = await createTag4Service.execute({
      tagName4,
      name
    });

    return res.json(tag4);

  }
}

export { CreateTag4Controller }