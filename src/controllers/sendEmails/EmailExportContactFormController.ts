import { Request, Response } from 'express';
import { EmailExportContactFormService } from '../../services/sendEmails/EmailExportContactFormService';

class EmailExportContactFormController {
    async handle(req: Request, res: Response) {
        const listContactForm = new EmailExportContactFormService();
        const contactFormEmail = await listContactForm.execute();

        return res.json(contactFormEmail);
    }
}

export { EmailExportContactFormController }