import { Request, Response } from 'express';
import { Tag2AllService } from '../../services/tag2/Tag2AllService';

class Tag2AllController {
    async handle(req: Request, res: Response) {
        const tag2_id = req.query.tag2_id as string;

        const listAllTag2 = new Tag2AllService();
        
        const tag2 = await listAllTag2.execute({
            tag2_id
        });

        return res.json(tag2);
    }
}

export { Tag2AllController }