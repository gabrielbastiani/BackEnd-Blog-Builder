import { Request, Response } from 'express';
import { ListPageContactFormService } from '../../services/contactform/ListPageContactFormService';

class ListPageContactFormController {
    async handle(req: Request, res: Response) {
        const listPageContactFormService = new ListPageContactFormService();

        const { pageContact, limitContact } = req.query;

        const data = listPageContactFormService.execute();

        const contactform = await listPageContactFormService.execute(Number(pageContact), Number(limitContact));

        return res.json(contactform);
    }
}

export { ListPageContactFormController }