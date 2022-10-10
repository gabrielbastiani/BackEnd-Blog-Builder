import prismaClient from "../../prisma";

interface ArticleRequest {
   title: string;
   description: string;
   banner: string;
   categoryName: string;
   name: string;
   tagName1: string;
   tagName2: string;
   tagName3: string;
   tagName4: string;
   tagName5: string;
}

class CreateArticleService {
   async execute({ title, description, banner, categoryName, name, tagName1, tagName2, tagName3, tagName4, tagName5 }: ArticleRequest) {

      const article = await prismaClient.article.create({
         data: {
            title: title,
            description: description,
            banner: banner,
            categoryName: categoryName,
            name: name,
            tagName1: tagName1,
            tagName2: tagName2,
            tagName3: tagName3,
            tagName4: tagName4,
            tagName5: tagName5,
         }
      })

      return article;

   }
}

export { CreateArticleService }