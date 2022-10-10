import { SendEmailContacFormService } from "../../services/sendEmails/SendEmailContacFormService";

class SendEmailContactFormController {
  async handle() {

    const sendEmailContacFormService = new SendEmailContacFormService();

    const sendEmails = await sendEmailContacFormService.execute();

    return (sendEmails)
  }
}

export { SendEmailContactFormController };