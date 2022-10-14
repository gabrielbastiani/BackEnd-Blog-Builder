import { Request, Response } from 'express';
import { AdminUserUpdateService } from '../../services/user/AdminUserUpdateService';

class AdminUpdateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, user_id, role } = req.body;

    const updateUserService = new AdminUserUpdateService();

    const userUpdated = await updateUserService.execute({
      user_id,
      name,
      email,
      role
    });
    return res.json(userUpdated);
  }
}

export { AdminUpdateUserController }