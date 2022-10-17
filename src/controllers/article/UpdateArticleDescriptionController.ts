import { Request, Response } from 'express';
import { UpdateArticleDescriptionService } from '../../services/article/UpdateArticleDescriptionService';

class UpdateArticleDescriptionController {
   async handle(req: Request, res: Response) {
      const article_id = req.query.article_id as string;
      const { description } = req.body;

      const updateArticleDescriptionService = new UpdateArticleDescriptionService();

      const article = await updateArticleDescriptionService.execute({
         article_id,
         description
      });
      return res.json(article);
   }
}

export { UpdateArticleDescriptionController }