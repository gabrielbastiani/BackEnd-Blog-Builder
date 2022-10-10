import { Request, Response } from 'express';
import { UserUpdateService } from '../../services/user/UserUpdateService';

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, user_id, role } = req.body;

    const updateUserService = new UserUpdateService();

    if (!req.file) {
      throw new Error('error upload file')
    } else {
      const { originalname, filename: photo } = req.file;

      const userUpdated = await updateUserService.execute({
        user_id,
        name,
        email,
        photo,
        role
      });
      return res.json(userUpdated);
    }
  }
}

export { UpdateUserController }
