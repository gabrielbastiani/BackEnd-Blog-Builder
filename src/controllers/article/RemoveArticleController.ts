import {Request, Response} from 'express'
import { RemoveArticleService } from '../../services/article/RemoveArticleService'
import { RemoveBannerArticleService } from '../../services/article/RemoveBannerArticleService'
import fs from 'fs';

class RemoveArticleController{
  async handle(req: Request, res: Response){
    const article_id = req.query.article_id as string;

    const removeBanner = new RemoveBannerArticleService();
    const removeArticleService = new RemoveArticleService();

    const articleBanner = await removeBanner.execute({
      article_id,
    })

    fs.unlinkSync(__dirname + '/' + '..' + '/' + '..' + '/' + '..' + '/' + 'tmp' + '/' + articleBanner.banner)

    const article = await removeArticleService.execute({
      article_id
    });

    return res.json([articleBanner, article]);

  }
}

export { RemoveArticleController }