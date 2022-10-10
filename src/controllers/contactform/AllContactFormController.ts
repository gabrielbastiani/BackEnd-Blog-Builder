import { Request, Response } from 'express';
import { AllContactFormService } from '../../services/contactform/AllContactFormService';

class AllContactFormController {
    async handle(req: Request, res: Response) {
        const listAllContactForm = new AllContactFormService();
        const newslatter = await listAllContactForm.execute();

        return res.json(newslatter);
    }
}

export { AllContactFormController }