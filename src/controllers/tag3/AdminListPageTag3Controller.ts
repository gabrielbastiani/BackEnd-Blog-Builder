import { Request, Response } from 'express';
import { AdminListPageTag3Service } from '../../services/tag3/AdminListPageTag3Service';

class AdminListPageTag3Controller {
    async handle(req: Request, res: Response) {
        const adminlistPageTag3Service = new AdminListPageTag3Service();

        const { pageTag3Admin, limitTag3Admin } = req.query;

        const tag3Admin = await adminlistPageTag3Service.execute(Number(pageTag3Admin), Number(limitTag3Admin));

        return res.json(tag3Admin);
    }
}

export { AdminListPageTag3Controller }