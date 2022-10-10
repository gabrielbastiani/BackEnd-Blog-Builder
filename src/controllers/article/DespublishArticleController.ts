import {Request, Response} from 'express'
import { DespublishdArticleService } from '../../services/article/DespublishdArticleService'

class DespublishArticleController{
  async handle(req: Request, res: Response){
    const article_id = req.query.article_id as string;

    const despublishArticle = new DespublishdArticleService();

    const article = await despublishArticle.execute({
      article_id
    });

    return res.json(article);

  }
}

export { DespublishArticleController }