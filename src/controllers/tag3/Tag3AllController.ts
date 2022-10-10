import { Request, Response } from 'express';
import { Tag3AllService } from '../../services/tag3/Tag3AllService';

class Tag3AllController {
    async handle(req: Request, res: Response) {
        const tag3_id = req.query.tag3_id as string;

        const listAllTag3 = new Tag3AllService();
        
        const tag3 = await listAllTag3.execute({
            tag3_id
        });

        return res.json(tag3);
    }
}

export { Tag3AllController }