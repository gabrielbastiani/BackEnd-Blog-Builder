import { Request, Response } from 'express';
import { UpdateArticleCategoryService } from '../../services/article/UpdateArticleCategoryService';

class UpdateArticleCategoryController {
   async handle(req: Request, res: Response) {
      const article_id = req.query.article_id as string;
      const { categoryName } = req.body;

      const updateArticleCategoryService = new UpdateArticleCategoryService();

      const article = await updateArticleCategoryService.execute({
         article_id,
         categoryName
      });
      return res.json(article);
   }
}

export { UpdateArticleCategoryController }
