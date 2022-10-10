import prismaClient from "../../prisma";

interface UserRequest{
  user_id: string;
}

class DeletePhotoUserService{
  async execute({ user_id }: UserRequest){

    const userPhoto = await prismaClient.user.findUnique({
      where:{
        id: user_id 
      }
    })

    return userPhoto;
    
  }
}

export { DeletePhotoUserService }