import {Request, Response} from 'express'
import { CreateTag2Service } from '../../services/tag2/CreateTag2Service'

class CreateTag2Controller {
  async handle(req: Request, res: Response){
    const { tagName2, name } = req.body;

    const createTag2Service = new CreateTag2Service();

    const tag2 = await createTag2Service.execute({
      tagName2,
      name
    });

    return res.json(tag2);

  }
}

export { CreateTag2Controller }