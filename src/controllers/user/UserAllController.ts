import { Request, Response } from 'express';
import { UserAllService } from '../../services/user/UserAllService';

class UserAllController {
    async handle(req: Request, res: Response) {
        const user_id = req.query.user_id as string;

        const listUsers = new UserAllService();
        
        const user = await listUsers.execute({
            user_id
        });

        return res.json(user);
    }
}

export { UserAllController }