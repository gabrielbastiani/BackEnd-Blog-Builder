import { Request, Response } from 'express';
import { Tag1AllService } from '../../services/tag1/Tag1AllService';

class Tag1AllController {
    async handle(req: Request, res: Response) {
        const tag1_id = req.query.tag1_id as string;

        const listAllTag1 = new Tag1AllService();
        
        const tag1 = await listAllTag1.execute({
            tag1_id
        });

        return res.json(tag1);
    }
}

export { Tag1AllController }