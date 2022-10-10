import { Request, Response } from 'express';
import { ExportContactFormService } from '../../services/contactform/ExportContactFormService';

class ExportContactFormController {
    async handle(req: Request, res: Response) {
        const listAllContactForm = new ExportContactFormService();
        const newslatter = await listAllContactForm.execute();

        return res.json(newslatter);
    }
}

export { ExportContactFormController }