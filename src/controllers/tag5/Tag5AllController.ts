import { Request, Response } from 'express';
import { Tag5AllService } from '../../services/tag5/Tag5AllService';

class Tag5AllController {
    async handle(req: Request, res: Response) {
        const tag5_id = req.query.tag5_id as string;

        const listAllTag5 = new Tag5AllService();
        
        const tag5 = await listAllTag5.execute({
            tag5_id
        });

        return res.json(tag5);
    }
}

export { Tag5AllController }