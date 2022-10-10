import { Request, Response } from 'express';
import { ExportNewslatterService } from '../../services/newslatter/ExportNewslatterService';

class ExportNewslatterController {
    async handle(req: Request, res: Response) {
        const listAllNewslatter = new ExportNewslatterService();
        const newslatter = await listAllNewslatter.execute();

        return res.json(newslatter);
    }
}

export { ExportNewslatterController }