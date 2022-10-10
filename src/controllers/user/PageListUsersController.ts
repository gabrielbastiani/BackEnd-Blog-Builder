import { Request, Response } from 'express';
import { PageListUsersService } from '../../services/user/PageListUsersService';

class PageListUsersController {
    async handle(req: Request, res: Response) {
        const pageListUsersService = new PageListUsersService();

        const { page, limit } = req.query;

        const newslatter = await pageListUsersService.execute(Number(page), Number(limit));

        return res.json(newslatter);
    }
}

export { PageListUsersController }