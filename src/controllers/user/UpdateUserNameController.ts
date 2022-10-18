import { Request, Response } from 'express';
import { UserUpdateNameService } from '../../services/user/UserUpdateNameService';

class UpdateUserNameController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { name } = req.body;

    const updateUserService = new UserUpdateNameService();

    const userUpdated = await updateUserService.execute({
      user_id,
      name,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserNameController }