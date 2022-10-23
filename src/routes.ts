import { Router } from 'express';
import multer from 'multer';


//-- ROTAS USER --
import { CreateUserController } from './controllers/user/CreateUserController';
import { UpdateUserNameController } from './controllers/user/UpdateUserNameController';
import { UpdateUserEmailController } from './controllers/user/UpdateUserEmailController';
import { PhotoUpdateUserController } from './controllers/user/PhotoUpdateUserController';
import { AdminCreateUserController } from './controllers/user/AdminCreateUserController';
import { RoleUserController } from './controllers/user/RoleUserController';
import { AdminRoleUserController } from './controllers/user/AdminRoleUserController';
import { UserRoleUserController } from './controllers/user/UserRoleUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';
import { UserAllController } from './controllers/user/UserAllController';
import { ListUserController } from './controllers/user/ListUserController';
import { RecoveryPasswordController } from './controllers/user/PasswordRecovery/RecoveryPasswordController';
import { EmailPasswordController } from './controllers/user/PasswordRecovery/EmailPasswordController';
import { AuthenticatedEmailUserController } from './controllers/user/AuthenticatedEmailUserController';
import { ListExactUserController } from './controllers/user/ListExactUserController';
import { DeleteUserController } from './controllers/user/DeleteUserController';
import { PageListUsersController } from './controllers/user/PageListUsersController';
import { ExportUsersController } from './controllers/user/ExportUsersController';

//-- ROTAS CATEGORY
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { UpdateCategoryController } from './controllers/category/UpdateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CategoryAllController } from './controllers/category/CategoryAllController';
import { ListExactCategoryController } from './controllers/category/ListExactCategoryController';
import { ListPageCategoryController } from './controllers/category/ListPageCategoryController';
import { AdminListPageCategoryController } from './controllers/category/AdminListPageCategoryController';
import { AllCategorysController } from './controllers/category/AllCategorysController';

//-- ROTAS ARTIGOS
import { CreateArticleController } from './controllers/article/CreateArticleController';
import { PublishedArticleController } from './controllers/article/PublishedArticleController';
import { DatePublishedArticleController } from './controllers/article/DatePublishedArticleController';
import { AllDatePublishedController } from './controllers/article/AllDatePublishedController';
import { DespublishArticleController } from './controllers/article/DespublishArticleController';
import { ListByCategoryController } from './controllers/article/ListByCategoryController';
import { RemoveArticleController } from './controllers/article/RemoveArticleController';
import { UpdateArticleTagsController } from './controllers/article/UpdateArticleTagsController';
import { UpdateArticleTitleController } from './controllers/article/UpdateArticleTitleController';
import { UpdateArticleCategoryController } from './controllers/article/UpdateArticleCategoryController';
import { UpdateArticleDescriptionController } from './controllers/article/UpdateArticleDescriptionController';
import { UpdateBannerArticleController } from './controllers/article/UpdateBannerArticleController';
import { ListExactArticleIDController } from './controllers/article/ListExactArticleIDController';
import { ListExactArticleController } from './controllers/article/ListExactArticleController';
import { ListPageArticlesController } from './controllers/article/ListPageArticlesController';
import { AdminDashboardPageArticlesController } from './controllers/article/AdminDashboardPageArticlesController';
import { ArticlesAllController } from './controllers/article/ArticlesAllController';
import { AllArticlesController } from './controllers/article/AllArticlesController';
import { ListPublishedArticleController } from './controllers/article/ListPublishedArticleController';
import { AllPublishedArticlesController } from './controllers/article/AllPublishedArticlesController';
import { PageArticlesController } from './controllers/article/PageArticlesController';
import { ListByUserController } from './controllers/article/ListByUserController';
import { ListByTag1Controller } from './controllers/article/ListByTag1Controller';
import { ListByTag2Controller } from './controllers/article/ListByTag2Controller';
import { ListByTag3Controller } from './controllers/article/ListByTag3Controller';
import { ListByTag4Controller } from './controllers/article/ListByTag4Controller';
import { ListByTag5Controller } from './controllers/article/ListByTag5Controller';


//-- ROTAS TAG1
import { CreateTag1Controller } from './controllers/tag1/CreateTag1Controller';
import { Tag1AllController } from './controllers/tag1/Tag1AllController';
import { ListTag1Controller } from './controllers/tag1/ListTag1Controller';
import { ListPageTag1Controller } from './controllers/tag1/ListPageTag1Controller';
import { AdminListPageTag1Controller } from './controllers/tag1/AdminListPageTag1Controller';
import { UpdateTag1Controller } from './controllers/tag1/UpdateTag1Controller';

//-- ROTAS TAG2
import { CreateTag2Controller } from './controllers/tag2/CreateTag2Controller';
import { Tag2AllController } from './controllers/tag2/Tag2AllController';
import { ListTag2Controller } from './controllers/tag2/ListTag2Controller';
import { ListPageTag2Controller } from './controllers/tag2/ListPageTag2Controller';
import { AdminListPageTag2Controller } from './controllers/tag2/AdminListPageTag2Controller';
import { UpdateTag2Controller } from './controllers/tag2/UpdateTag2Controller';

//-- ROTAS TAG3
import { CreateTag3Controller } from './controllers/tag3/CreateTag3Controller';
import { Tag3AllController } from './controllers/tag3/Tag3AllController';
import { ListTag3Controller } from './controllers/tag3/ListTag3Controller';
import { ListPageTag3Controller } from './controllers/tag3/ListPageTag3Controller';
import { AdminListPageTag3Controller } from './controllers/tag3/AdminListPageTag3Controller';
import { UpdateTag3Controller } from './controllers/tag3/UpdateTag3Controller';

//-- ROTAS TAG4
import { CreateTag4Controller } from './controllers/tag4/CreateTag4Controller';
import { Tag4AllController } from './controllers/tag4/Tag4AllController';
import { ListTag4Controller } from './controllers/tag4/ListTag4Controller';
import { ListPageTag4Controller } from './controllers/tag4/ListPageTag4Controller';
import { AdminListPageTag4Controller } from './controllers/tag4/AdminListPageTag4Controller';
import { UpdateTag4Controller } from './controllers/tag4/UpdateTag4Controller';

//-- ROTAS TAG5
import { CreateTag5Controller } from './controllers/tag5/CreateTag5Controller';
import { Tag5AllController } from './controllers/tag5/Tag5AllController';
import { ListTag5Controller } from './controllers/tag5/ListTag5Controller';
import { ListPageTag5Controller } from './controllers/tag5/ListPageTag5Controller';
import { AdminListPageTag5Controller } from './controllers/tag5/AdminListPageTag5Controller';
import { UpdateTag5Controller } from './controllers/tag5/UpdateTag5Controller';

//-- ROTAS NEWSLATTER
import { CreateNewslatterController } from './controllers/newslatter/CreateNewslatterController';
import { RemoveNewslatterController } from './controllers/newslatter/RemoveNewslatterController';
import { NewslatterAllController } from './controllers/newslatter/NewslatterAllController';
import { AllNewslatterController } from './controllers/newslatter/AllNewslatterController';
import { ExportNewslatterController } from './controllers/newslatter/ExportNewslatterController';
import { ListPageNewslatterController } from './controllers/newslatter/ListPageNewslatterController';

//-- ROTAS CONTACTFORM
import { CreateContactFormController } from './controllers/contactform/CreateContactFormController';
import { RemoveContactFormController } from './controllers/contactform/RemoveContactFormController';
import { ContactFormAllController } from './controllers/contactform/ContactFormAllController';
import { AllContactFormController } from './controllers/contactform/AllContactFormController';
import { ExportContactFormController } from './controllers/contactform/ExportContactFormController';
import { ListPageContactFormController } from './controllers/contactform/ListPageContactFormController';

//-- ROTA SENDEMAILS
import { SendEmailContactFormController } from './controllers/sendEmails/SendEmailContactFormController';
import { SendEmailNewsController } from './controllers/sendEmails/SendEmailNewsController';
import { EmailExportUsersController } from './controllers/sendEmails/EmailExportUsersController';
import { EmailExportNewslattersController } from './controllers/sendEmails/EmailExportNewslattersController';
import { EmailExportContactFormController } from './controllers/sendEmails/EmailExportContactFormController';


import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';


const router = Router();
const upload = multer(uploadConfig.upload("./imgblog"));



//-- ROTAS USER --
router.post('/users', upload.single('file'), new CreateUserController().handle)
router.put('/users/update/name', isAuthenticated, new UpdateUserNameController().handle)
router.put('/users/update/email', isAuthenticated, new UpdateUserEmailController().handle)
router.put('/users/photo', isAuthenticated, upload.single('file'), new PhotoUpdateUserController().handle)
router.post('/users/admin', upload.single('file'), new AdminCreateUserController().handle)
router.put('/users/admin', new RoleUserController().handle)
router.put('/users/update/role/admin', isAuthenticated, new AdminRoleUserController().handle)
router.put('/users/update/role/user', isAuthenticated, new UserRoleUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailuserController().handle)
router.get('/users/all', isAuthenticated, new UserAllController().handle)
router.get('/users', new ListUserController().handle)
router.post('/recover', new EmailPasswordController().handle);
router.put('/recover', new RecoveryPasswordController().handle);
router.put('/users/authenticated', new AuthenticatedEmailUserController().handle)
router.get('/users/exact', isAuthenticated, new ListExactUserController().handle)
router.delete('/users/remove', isAuthenticated, new DeleteUserController().handle)
router.get('/users/pagesusers', isAuthenticated, new PageListUsersController().handle)
router.get('/users/export', isAuthenticated, new ExportUsersController().handle)

//-- ROTAS CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', new ListCategoryController().handle)
router.get('/category/total', isAuthenticated, new CategoryAllController().handle)
router.get('/category/all', new ListPageCategoryController().handle)
router.get('/category/admin', isAuthenticated, new AdminListPageCategoryController().handle)
router.put('/category/update', isAuthenticated, new UpdateCategoryController().handle)
router.get('/category/exact', new ListExactCategoryController().handle)
router.get('/category/filter', isAuthenticated, new AllCategorysController().handle)

//-- ROTAS ARTIGOS
router.post('/article', isAuthenticated, upload.single('file'), new CreateArticleController().handle)
router.put('/article/published', isAuthenticated, new PublishedArticleController().handle)
router.put('/article/datefuture', new DatePublishedArticleController().handle)
router.get('/article/date', new AllDatePublishedController().handle)
router.put('/article/despublish', isAuthenticated, new DespublishArticleController().handle)
router.delete('/article/remove', isAuthenticated, new RemoveArticleController().handle)
router.put('/article/update/tags', isAuthenticated, new UpdateArticleTagsController().handle)
router.put('/article/update/title', isAuthenticated, new UpdateArticleTitleController().handle)
router.put('/article/update/category', isAuthenticated, new UpdateArticleCategoryController().handle)
router.put('/article/update/description', isAuthenticated, new UpdateArticleDescriptionController().handle)
router.put('/article/banner/update', isAuthenticated, upload.single('file'), new UpdateBannerArticleController().handle)
router.get('/article/exact/id', isAuthenticated, new ListExactArticleIDController().handle)
router.get('/article/exact', new ListExactArticleController().handle)
router.get('/article/all', new ListPageArticlesController().handle)
router.get('/article/admin', isAuthenticated, new AdminDashboardPageArticlesController().handle)
router.get('/article', new ArticlesAllController().handle)
router.get('/article/filter', isAuthenticated, new AllArticlesController().handle)
router.get('/article/search', new AllPublishedArticlesController().handle)
router.get('/article/published/blog', new ListPublishedArticleController().handle)
router.get('/article/read', new PageArticlesController().handle)
router.get('/category/article', new ListByCategoryController().handle)
router.get('/user/article', new ListByUserController().handle)
router.get('/tag1/article', new ListByTag1Controller().handle)
router.get('/tag2/article', new ListByTag2Controller().handle)
router.get('/tag3/article', new ListByTag3Controller().handle)
router.get('/tag4/article', new ListByTag4Controller().handle)
router.get('/tag5/article', new ListByTag5Controller().handle)

//-- ROTAS TAG1
router.post('/tag1', isAuthenticated, new CreateTag1Controller().handle)
router.get('/tag1/all', isAuthenticated, new Tag1AllController().handle)
router.get('/tag1', new ListTag1Controller().handle)
router.get('/tag1/page', isAuthenticated, new ListPageTag1Controller().handle)
router.get('/tag1/pageAdmin', isAuthenticated, new AdminListPageTag1Controller().handle)
router.put('/tag1/update', isAuthenticated, new UpdateTag1Controller().handle)

//-- ROTAS TAG2
router.post('/tag2', isAuthenticated, new CreateTag2Controller().handle)
router.get('/tag2/all', isAuthenticated, new Tag2AllController().handle)
router.get('/tag2', new ListTag2Controller().handle)
router.get('/tag2/page', isAuthenticated, new ListPageTag2Controller().handle)
router.get('/tag2/pageAdmin', isAuthenticated, new AdminListPageTag2Controller().handle)
router.put('/tag2/update', isAuthenticated, new UpdateTag2Controller().handle)

//-- ROTAS TAG3
router.post('/tag3', isAuthenticated, new CreateTag3Controller().handle)
router.get('/tag3/all', isAuthenticated, new Tag3AllController().handle)
router.get('/tag3', new ListTag3Controller().handle)
router.get('/tag3/page', isAuthenticated, new ListPageTag3Controller().handle)
router.get('/tag3/pageAdmin', isAuthenticated, new AdminListPageTag3Controller().handle)
router.put('/tag3/update', isAuthenticated, new UpdateTag3Controller().handle)

//-- ROTAS TAG4
router.post('/tag4', isAuthenticated, new CreateTag4Controller().handle)
router.get('/tag4/all', isAuthenticated, new Tag4AllController().handle)
router.get('/tag4', new ListTag4Controller().handle)
router.get('/tag4/page', isAuthenticated, new ListPageTag4Controller().handle)
router.get('/tag4/pageAdmin', isAuthenticated, new AdminListPageTag4Controller().handle)
router.put('/tag4/update', isAuthenticated, new UpdateTag4Controller().handle)

//-- ROTAS TAG5
router.post('/tag5', isAuthenticated, new CreateTag5Controller().handle)
router.get('/tag5/all', isAuthenticated, new Tag5AllController().handle)
router.get('/tag5', new ListTag5Controller().handle)
router.get('/tag5/page', isAuthenticated, new ListPageTag5Controller().handle)
router.get('/tag5/pageAdmin', isAuthenticated, new AdminListPageTag5Controller().handle)
router.put('/tag5/update', isAuthenticated, new UpdateTag5Controller().handle)

//-- ROTAS NEWSLATTERS
router.post('/newslatter', new CreateNewslatterController().handle)
router.delete('/newslatter/remove', isAuthenticated, new RemoveNewslatterController().handle)
router.get('/newslatter', isAuthenticated, new NewslatterAllController().handle)
router.get('/newslatter/all', isAuthenticated, new AllNewslatterController().handle)
router.get('/newslatter/export', isAuthenticated, new ExportNewslatterController().handle)
router.get('/newslatter/page', isAuthenticated, new ListPageNewslatterController().handle)

//-- ROTAS CONTACTFORM
router.post('/contactform', new CreateContactFormController().handle)
router.delete('/contactform/remove', isAuthenticated, new RemoveContactFormController().handle)
router.get('/contactform', isAuthenticated, new ContactFormAllController().handle)
router.get('/contactform/all', isAuthenticated, new AllContactFormController().handle)
router.get('/contactform/export', isAuthenticated, new ExportContactFormController().handle)
router.get('/contactform/page', isAuthenticated, new ListPageContactFormController().handle)

//-- ROTA SENDEMAILS
router.post('/sendemail', new SendEmailContactFormController().handle)
router.post('/sendemailnews', new SendEmailNewsController().handle)
router.get('/users/sendlistuser', isAuthenticated, new EmailExportUsersController().handle)
router.get('/newslatters/sendlist', isAuthenticated, new EmailExportNewslattersController().handle)
router.get('/contactform/sendlist', isAuthenticated, new EmailExportContactFormController().handle)


export { router };