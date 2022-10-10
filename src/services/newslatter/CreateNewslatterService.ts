import prismaClient from '../../prisma'

interface NewsLatterRequest{
  nameEmail: string;
  emailName: string;
}

class CreateNewslatterService{
  async execute({ nameEmail, emailName }: NewsLatterRequest){

    // verificar se ele enviou um email
    if(!emailName){
      throw new Error("Email incorrect")
    }

    //Verificar se esse email já está cadastrado na plataforma
    const newslatterAlredyExist = await prismaClient.newslatter.findFirst({
      where:{
        emailName: emailName
      }
    })

    if(newslatterAlredyExist){
      throw new Error("User already exists")
    }

    const newslatter = await prismaClient.newslatter.create({
      data:{
        nameEmail: nameEmail,
        emailName: emailName,
      },
      select:{
        id: true,
        nameEmail: true,       
        emailName: true,
      }
    })

    return newslatter;
  }
}

export { CreateNewslatterService }