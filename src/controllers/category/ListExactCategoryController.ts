import { Request, Response } from 'express';
import { ListExactCategoryService } from '../../services/category/ListExactCategoryService';

class ListExactCategoryController {
    async handle(req: Request, res: Response) {
        const { categoryName } = req.query;
        const listExactCategoryService = new ListExactCategoryService();
        const category = await listExactCategoryService.execute({ categoryName });

        return res.json(category);
    }
}

export { ListExactCategoryController }