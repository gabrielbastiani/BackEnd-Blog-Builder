import { Request, Response } from 'express';
import { UserUpdateService } from '../../services/user/UserUpdateService';

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;

    const { name, email } = req.body;

    const updateUserService = new UserUpdateService();

    const userUpdated = await updateUserService.execute({
      user_id,
      name,
      email,
    });
    return res.json(userUpdated);
  }
}

export { UpdateUserController }