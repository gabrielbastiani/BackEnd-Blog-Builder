import { Request, Response } from 'express';
import { UpdateBannerArticleService } from '../../services/article/UpdateBannerArticleService';
import { RemoveBannerArticleService } from '../../services/article/RemoveBannerArticleService'
import fs from 'fs';


class UpdateBannerArticleController {
   async handle(req: Request, res: Response) {
      const article_id = req.query.article_id as string;

      const removeBanner = new RemoveBannerArticleService();
      const updateBannerArticleService = new UpdateBannerArticleService();

      const articleBanner = await removeBanner.execute({
         article_id,
       })
   
       fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'imgblog' + '/' + articleBanner.banner)

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