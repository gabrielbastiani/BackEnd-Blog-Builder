import { SendEmailNewsService } from "../../services/sendEmails/SendEmailNewsService";

class SendEmailNewsController {
  async handle() {

    const sendEmailNewsService = new SendEmailNewsService();

    const sendEmails = await sendEmailNewsService.execute();

    return (sendEmails)
  }
}

export { SendEmailNewsController };