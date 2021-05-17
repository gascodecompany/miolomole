import connectDB from '../../../middleware/mongodb';
import Contact from '../../../models/contact';
import createModel from '../../../utils/createModel';
import contactEmail from '../../../utils/emails/contact';

export const sendContact = async (parent: any, args: any, context: any) => {
  if (!!context.user) args.user = context.user._id;
  const createdModel = await createModel({ args, model: Contact });
  await createdModel.save();
  transport.sendMail(createEmail({to: "tiago.kise@hotmail.com", html: contactEmail(args) , subject: "Contato de usuário site Miolo Mole"}));
  return true;
};

export default connectDB(sendContact);