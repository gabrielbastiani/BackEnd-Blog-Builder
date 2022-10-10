import {Request, Response} from 'express'
import { CreateContactFormService } from '../../services/contactform/CreateContactFormService'

class CreateContactFormController{
  async handle(req: Request, res: Response){
    const {nameContact, emailContact, textContact } = req.body;

    const createContactFormService = new CreateContactFormService();

    const contactform = await createContactFormService.execute({
      nameContact,
      emailContact,
      textContact
    });

    return res.json(contactform)
  }
}

export { CreateContactFormController }