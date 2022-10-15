import { Request, Response } from 'express';
import { AdminUserUpdateService } from '../../services/user/AdminUserUpdateService';

class AdminUpdateUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id;
    
    const { name, email } = req.body;

    const updateUserService = new AdminUserUpdateService();

    const userUpdated = await updateUserService.execute({
      user_id,
      name,
      email,
    });
    return res.json(userUpdated);
  }
}

export { AdminUpdateUserController }