import { Request, Response } from "express";
import { CreateArticleService } from "../../services/article/CreateArticleService";

class CreateArticleController {
   async handle(req: Request, res: Response) {
      const { title, description, categoryName, name, tagName1, tagName2, tagName3, tagName4, tagName5 } = req.body;

      const createArticleService = new CreateArticleService();

      if (!req.file) {
         throw new Error("error upload file")
      } else {

         const { originalname, filename: banner } = req.file;

         const article = await createArticleService.execute({
            title,
            description,
            banner,
            categoryName,
            name,
            tagName1,
            tagName2,
            tagName3,
            tagName4,
            tagName5
         })
         return res.json(article)
      }

   }
}

export { CreateArticleController }