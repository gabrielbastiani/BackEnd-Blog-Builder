import {Request, Response} from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController{
  async handle(req: Request, res: Response){
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const {originalname, filename: photo} = req.file;

    const user = await createUserService.execute({
      photo,
      name,
      email,
      password,
    });

    return res.json(user)
  }
}

export { CreateUserController }