import {Request, Response} from 'express'
import { CreateTag5Service } from '../../services/tag5/CreateTag5Service'

class CreateTag5Controller {
  async handle(req: Request, res: Response){
    const { tagName5, name } = req.body;

    const createTag5Service = new CreateTag5Service();

    const tag5 = await createTag5Service.execute({
      tagName5,
      name
    });

    return res.json(tag5);

  }
}

export { CreateTag5Controller }