import { Request, Response } from 'express';
import { ListPageCategoryService } from '../../services/category/ListPageCategoryService';

class ListPageCategoryController {
    async handle(req: Request, res: Response) {
        const listPageCategoryService = new ListPageCategoryService();

        const { page, limit, name } = req.query;

        const categorys = await listPageCategoryService.execute(Number(page), Number(limit), name);

        return res.json(categorys);
    }
}

export { ListPageCategoryController }