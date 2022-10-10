import {Request, Response} from 'express'
import { AdminCreateUserService } from '../../services/user/AdminCreateUserService'

class AdminCreateUserController{
  async handle(req: Request, res: Response){
    const { name, email, password } = req.body;

    const adminCreateUserService = new AdminCreateUserService();

    const {originalname, filename: photo} = req.file;

    const user = await adminCreateUserService.execute({
      photo,
      name,
      email,
      password,
    });

    return res.json(user)
  }
}

export { AdminCreateUserController }