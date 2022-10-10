import { Request, Response } from 'express';
import { UpdateArticleService } from '../../services/article/UpdateArticleService';

class UpdateArticleController {
   async handle(req: Request, res: Response) {
      const article_id = req.query.article_id
      const { title, description, categoryName, tagName1, tagName2, tagName3, tagName4, tagName5 } = req.body;

      const updateArticleService = new UpdateArticleService();

      if (!req.file) {
         throw new Error('error upload file')
      } else {
         const { originalname, filename: banner } = req.file;

         const article = await updateArticleService.execute({
            article_id,
            title,
            description,
            banner,
            categoryName,
            tagName1,
            tagName2,
            tagName3,
            tagName4,
            tagName5,
         });
         return res.json(article);
      }
   }
}

export { UpdateArticleController }
