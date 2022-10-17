import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";
import { RomovePhotoUserService } from "../../services/user/RemovePhotoUserService";
import fs from 'fs';


class DeleteUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id as string;

    const removePhotoUser = new RomovePhotoUserService();
    const deleteUserService = new DeleteUserService();

    const photoUser = await removePhotoUser.execute({
      user_id,
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'imgblog' + '/' + photoUser.photo)

    const userPhoto = await deleteUserService.execute({
      user_id,
    });


    return res.json([userPhoto, photoUser]);
  }
}

export { DeleteUserController };