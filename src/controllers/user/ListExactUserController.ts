import { Request, Response } from 'express';
import { ListExactUserService } from '../../services/user/ListExactUserService';

class ListExactUserController {
    async handle(req: Request, res: Response) {
        const { user_id } = req.query;
        const listExactUserService = new ListExactUserService();
        const user = await listExactUserService.execute({ user_id });

        return res.json(user);
    }
}

export { ListExactUserController }