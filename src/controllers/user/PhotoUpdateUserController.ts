import { Request, Response } from 'express';
import { PhotoUserUpdateService } from '../../services/user/PhotoUserUpdateService';
import { RomovePhotoUserService } from "../../services/user/RemovePhotoUserService";
import fs from 'fs';


class PhotoUpdateUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.body;

    const removePhotoUser = new RomovePhotoUserService();
    const updateUserService = new PhotoUserUpdateService();

    const photoUser = await removePhotoUser.execute({
      user_id,
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'imgblog' + '/' + photoUser.photo)

    if (!req.file) {
      throw new Error('error upload file')
    } else {
      const { originalname, filename: photo } = req.file;

      const userUpdated = await updateUserService.execute({
        user_id,
        photo
      });
      return res.json([userUpdated, photoUser]);
    }
  }
}

export { PhotoUpdateUserController }