import {Request, Response} from 'express'
import { CreateTag3Service } from '../../services/tag3/CreateTag3Service'

class CreateTag3Controller {
  async handle(req: Request, res: Response){
    const { tagName3, name } = req.body;

    const createTag3Service = new CreateTag3Service();

    const tag3 = await createTag3Service.execute({
      tagName3,
      name
    });

    return res.json(tag3);

  }
}

export { CreateTag3Controller }