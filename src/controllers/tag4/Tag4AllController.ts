import { Request, Response } from 'express';
import { Tag4AllService } from '../../services/tag4/Tag4AllService';

class Tag4AllController {
    async handle(req: Request, res: Response) {
        const tag4_id = req.query.tag4_id as string;

        const listAllTag4 = new Tag4AllService();
        
        const tag4 = await listAllTag4.execute({
            tag4_id
        });

        return res.json(tag4);
    }
}

export { Tag4AllController }