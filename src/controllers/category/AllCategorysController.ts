import { Request, Response } from 'express';
import { AllCategorysService } from '../../services/category/AllCategorysService';

class AllCategorysController {
    async handle(req: Request, res: Response) {
        const listAllCategorys = new AllCategorysService();
        const categorys = await listAllCategorys.execute();

        return res.json(categorys);
    }
}

export { AllCategorysController }