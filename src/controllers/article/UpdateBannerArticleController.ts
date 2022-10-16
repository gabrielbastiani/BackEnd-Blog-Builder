import { Request, Response } from 'express';
import { UpdateBannerArticleService } from '../../services/article/UpdateBannerArticleService';


class UpdateBannerArticleController {
   async handle(req: Request, res: Response) {
      const article_id = req.query.article_id as string;

      const updateBannerArticleService = new UpdateBannerArticleService();

      if (!req.file) {
         throw new Error('error upload file')
      } else {
         const { originalname, filename: banner } = req.file;

         const article = await updateBannerArticleService.execute({
            article_id,
            banner,
         });
         return res.json(article);
      }
   }
}

export { UpdateBannerArticleController }