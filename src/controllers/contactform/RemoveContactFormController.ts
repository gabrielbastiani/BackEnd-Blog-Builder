import { Request, Response } from "express";
import { RemoveContactFormService } from "../../services/contactform/RemoveContactFormService";

class RemoveContactFormController {
  async handle(req: Request, res: Response) {
    const contactform_id = req.query.contactform_id as string;

    const removeContactFormService = new RemoveContactFormService();

      const contactform = await removeContactFormService.execute({
        contactform_id,
      });

      return res.json(contactform);
    }
  }

export { RemoveContactFormController };
