import prismaClient from '../../prisma'

interface ContactFormRequest{
  nameContact: string;
  emailContact: string;
  textContact: string;
}

class CreateContactFormService{
  async execute({ nameContact, emailContact, textContact }: ContactFormRequest){

    // verificar se ele enviou um email
    if(!emailContact){
      throw new Error("Email incorrect")
    }

    if(!textContact){
      throw new Error("Text incorrect")
    }

    const contactform = await prismaClient.contactform.create({
      data:{
        nameContact: nameContact,
        emailContact: emailContact,
        textContact: textContact
      },
      select:{
        id: true,
        nameContact: true,       
        emailContact: true,
        textContact: true
      }
    })

    return contactform;
  }
}

export { CreateContactFormService }