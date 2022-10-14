import { Request, Response } from 'express';
import { PhotoAdminUserUpdateService } from '../../services/user/PhotoAdminUserUpdateService';

class PhotoAdminUpdateUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.body;

    const updateUserService = new PhotoAdminUserUpdateService();

    if (!req.file) {
      throw new Error('error upload file')
    } else {
      const { originalname, filename: photo } = req.file;

      const userUpdated = await updateUserService.execute({
        user_id,
        photo
      });
      return res.json(userUpdated);
    }
  }
}

export { PhotoAdminUpdateUserController }