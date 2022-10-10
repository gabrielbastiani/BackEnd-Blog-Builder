import { Request, Response } from 'express';
import { NewslatterAllService } from '../../services/newslatter/NewslatterAllService';

class NewslatterAllController {
    async handle(req: Request, res: Response) {
        const newslatter_id = req.query.newslatter_id as string;

        const listNewslatters = new NewslatterAllService();
        
        const contactForm = await listNewslatters.execute({
            newslatter_id
        });

        return res.json(contactForm);
    }
}

export { NewslatterAllController }