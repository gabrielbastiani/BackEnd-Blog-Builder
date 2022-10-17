import { Request, Response } from 'express';
import { UpdateArticleTagsService } from '../../services/article/UpdateArticleTagsService';

class UpdateArticleTagsController {
   async handle(req: Request, res: Response) {
      const article_id = req.query.article_id as string;
      const { tagName1, tagName2, tagName3, tagName4, tagName5 } = req.body;

      const updateArticleTagsService = new UpdateArticleTagsService();

      const article = await updateArticleTagsService.execute({
         article_id,
         tagName1,
         tagName2,
         tagName3,
         tagName4,
         tagName5,
      });
      return res.json(article);
   }
}

export { UpdateArticleTagsController }
