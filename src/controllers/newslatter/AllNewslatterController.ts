import { Request, Response } from 'express';
import { AllNewslatterService } from '../../services/newslatter/AllNewslatterService';

class AllNewslatterController {
    async handle(req: Request, res: Response) {
        const listAllNewslatter = new AllNewslatterService();
        const newslatter = await listAllNewslatter.execute();

        return res.json(newslatter);
    }
}

export { AllNewslatterController }