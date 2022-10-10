import prismaClient from "../../prisma";

interface ContactFormRequest{
  contactform_id: string;
}

class RemoveContactFormService{
  async execute({ contactform_id }: ContactFormRequest){

      const contactform = await prismaClient.contactform.delete({
        where:{
          id: contactform_id
        }
      })
  
      return contactform;
    }
    
}

export { RemoveContactFormService }