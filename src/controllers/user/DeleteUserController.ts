import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";
import { DeletePhotoUserService } from '../../services/user/DeletePhotoUserService'
import fs from 'fs';

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id as string;

    const deleteUserService = new DeleteUserService();
    const removePhoto = new DeletePhotoUserService();

      const userPhoto = await deleteUserService.execute({
        user_id,
      });

      fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'tmp' + '/' + userPhoto.photo)

      const user = await removePhoto.execute({
        user_id
      });

      return res.json([userPhoto, user]);
    }
  }

export { DeleteUserController };
