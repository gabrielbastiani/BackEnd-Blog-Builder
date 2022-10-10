import { Request, Response } from 'express';
import { EmailExportNewslattersService } from '../../services/sendEmails/EmailExportNewslattersService';

class EmailExportNewslattersController {
    async handle(req: Request, res: Response) {
        const listNewslatters = new EmailExportNewslattersService();
        const newslattersEmail = await listNewslatters.execute();

        return res.json(newslattersEmail);
    }
}

export { EmailExportNewslattersController }