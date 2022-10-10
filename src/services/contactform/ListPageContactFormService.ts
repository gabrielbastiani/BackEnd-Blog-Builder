import prismaClient from '../../prisma';

class ListPageContactFormService {
    async execute(pageContact = 1, limitContact = 4) {

        const skip = limitContact * (pageContact - 1);

        const allContactForm = await prismaClient.contactform.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });

        const contact = await prismaClient.contactform.findMany({
            skip,
            take: limitContact,
            orderBy: {
                created_at: 'desc'
            }
        });

        // Retornamos um objeto onde tem a lista e tambem qual numero total de paginas tem com base no limite que recebeu
        const data = {
            contact,
            totalContact: allContactForm.length,
            total_pagesContact: Math.ceil(allContactForm.length / limitContact),
            current_page: pageContact,
        }

        return data;

    }
}

export { ListPageContactFormService }