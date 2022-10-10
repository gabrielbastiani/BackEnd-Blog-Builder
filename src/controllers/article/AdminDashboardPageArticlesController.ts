import { Request, Response } from 'express';
import { AdminDashboardPageArticlesService } from '../../services/article/AdminDashboardPageArticlesService';

class AdminDashboardPageArticlesController {
    async handle(req: Request, res: Response) {

        const adminDashboardPageArticlesService = new AdminDashboardPageArticlesService();

        const { pageAdmin, limitAdmin } = req.query;

        const articles = await adminDashboardPageArticlesService.execute(Number(pageAdmin), Number(limitAdmin));

        return res.json(articles);
    }
}

export { AdminDashboardPageArticlesController }