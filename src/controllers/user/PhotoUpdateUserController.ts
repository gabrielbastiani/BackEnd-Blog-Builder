import { Request, Response } from 'express';
import { PhotoUserUpdateService } from '../../services/user/PhotoUserUpdateService';


class PhotoUpdateUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id as string;

    const updateUserService = new PhotoUserUpdateService();

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

export { PhotoUpdateUserController }