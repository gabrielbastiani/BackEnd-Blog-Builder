import { Request, Response } from 'express';
import { ListByUserService } from '../../services/article/ListByUserService';

class ListByUserController {
    async handle(req: Request, res: Response) {

        const listByUserService = new ListByUserService();

        const { page, limit, name } = req.query;

        const articles = await listByUserService.execute(Number(page), Number(limit), name);

        return res.json(articles);
    }
}

export { ListByUserController }