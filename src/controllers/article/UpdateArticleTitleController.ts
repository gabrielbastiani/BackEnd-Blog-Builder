import { Request, Response } from 'express';
import { UpdateArticleTitleService } from '../../services/article/UpdateArticleTitleService';

class UpdateArticleTitleController {
   async handle(req: Request, res: Response) {
      const article_id = req.query.article_id as string;
      const { title } = req.body;

      const updateArticleTitleService = new UpdateArticleTitleService();

      const article = await updateArticleTitleService.execute({
         article_id,
         title
      });
      return res.json(article);
   }
}

export { UpdateArticleTitleController }
