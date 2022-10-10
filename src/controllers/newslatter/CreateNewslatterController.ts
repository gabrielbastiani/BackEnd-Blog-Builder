import {Request, Response} from 'express'
import { CreateNewslatterService } from '../../services/newslatter/CreateNewslatterService'

class CreateNewslatterController{
  async handle(req: Request, res: Response){
    const { nameEmail, emailName } = req.body;

    const createNewslatterService = new CreateNewslatterService();

    const newslatter = await createNewslatterService.execute({
      nameEmail,
      emailName,
    });

    return res.json(newslatter)
  }
}

export { CreateNewslatterController }