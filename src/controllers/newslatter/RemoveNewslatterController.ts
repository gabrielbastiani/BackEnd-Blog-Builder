import { Request, Response } from "express";
import { RemoveNewslatterService } from "../../services/newslatter/RemoveNewslatterService";

class RemoveNewslatterController {
  async handle(req: Request, res: Response) {
    const newslatter_id = req.query.newslatter_id as string;

    const removeNewslatterService = new RemoveNewslatterService();

      const newslatter = await removeNewslatterService.execute({
        newslatter_id,
      });

      return res.json(newslatter);
    }
  }

export { RemoveNewslatterController };
