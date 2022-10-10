import {Request, Response} from 'express'
import { CreateTag1Service } from '../../services/tag1/CreateTag1Service'

class CreateTag1Controller {
  async handle(req: Request, res: Response){
    const { tagName1, name } = req.body;

    const createTag1Service = new CreateTag1Service();

    const tag1 = await createTag1Service.execute({
      tagName1,
      name
    });

    return res.json(tag1);

  }
}

export { CreateTag1Controller }