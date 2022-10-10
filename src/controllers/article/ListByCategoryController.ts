import { Request, Response } from 'express';
import { ListByCategoryService } from '../../services/article/ListByCategoryService';

class ListByCategoryController {
    async handle(req: Request, res: Response) {

        const listByCategoryService = new ListByCategoryService();

        const { page, limit, categoryName } = req.query;

        const articles = await listByCategoryService.execute(Number(page), Number(limit), categoryName);

        return res.json(articles);
    }
}

export { ListByCategoryController }