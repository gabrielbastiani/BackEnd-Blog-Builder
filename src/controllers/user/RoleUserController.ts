import {Request, Response} from 'express'
import { RoleUserUpdateService } from '../../services/user/RoleUserUpdateService'

class RoleUserController{
  async handle(req: Request, res: Response){
    const user_id = req.query.user_id as string;

    const roleUserUpdateService = new RoleUserUpdateService();

    const user = await roleUserUpdateService.execute({
      user_id
    });

    return res.json(user);

  }
}

export { RoleUserController }