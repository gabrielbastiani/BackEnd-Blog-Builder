import {Request, Response} from 'express'
import { PublishedArticleSevice } from '../../services/article/PublishedArticleSevice'

class PublishedArticleController{
  async handle(req: Request, res: Response){
    const article_id = req.query.article_id as string;

    const publishedArticle = new PublishedArticleSevice();

    const article = await publishedArticle.execute({
      article_id
    });

    return res.json(article);

  }
}

export { PublishedArticleController }