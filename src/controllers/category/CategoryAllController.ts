import { Request, Response } from 'express';
import { CategorysAllService } from '../../services/category/CategorysAllService';

class CategoryAllController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const listAllCategory = new CategorysAllService();
        
        const category = await listAllCategory.execute({
            category_id
        });

        return res.json(category);
    }
}

export { CategoryAllController }