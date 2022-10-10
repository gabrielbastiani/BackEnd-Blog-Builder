import { Request, Response } from 'express';
import { AdminListPageCategoryService } from '../../services/category/AdminListPageCategoryService';

class AdminListPageCategoryController {
    async handle(req: Request, res: Response) {
        const adminListPageCategoryService = new AdminListPageCategoryService();

        const { pageAdmin, limitAdmin } = req.query;

        const categorys = await adminListPageCategoryService.execute(Number(pageAdmin), Number(limitAdmin));

        return res.json(categorys);
    }
}

export { AdminListPageCategoryController }