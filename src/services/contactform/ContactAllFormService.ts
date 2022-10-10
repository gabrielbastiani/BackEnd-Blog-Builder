import prismaClient from '../../prisma';


interface ContactRequest{
    contactform_id: string;
}

class ContactAllFormService {
    async execute({contactform_id}: ContactRequest) {
        const findAll = await prismaClient.contactform.findMany({
            where: {
                id: contactform_id,
            }
        });

        return findAll;
        
    }
}

export { ContactAllFormService }