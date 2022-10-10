import { Request, Response } from 'express';
import { ContactAllFormService } from '../../services/contactform/ContactAllFormService';

class ContactFormAllController {
    async handle(req: Request, res: Response) {
        const contactform_id = req.query.contactform_id as string;

        const listContactForm = new ContactAllFormService();
        
        const contactForm = await listContactForm.execute({
            contactform_id
        });

        return res.json(contactForm);
    }
}

export { ContactFormAllController }