import contactEmail from '../../../utils/emails/contact';
import { createEmail, transport } from "../../../utils/email";
import contactResponseEmail from '../../../utils/emails/contactResponse';

export default async function contactHandler (req, res) {
  const { body, method } = req;
  let args = body ? { ...body } : {};
  let { name, email, message } = body;

  try {
    switch (method) {
      case 'POST':
        if(!name || !email || !message ) { return res.status(400).json({ errorMessage: 'Digite um email válido' }) };
        transport.sendMail(createEmail({to: process.env.EMAIL_MIOLOMOLE, html: contactEmail({...args}) , subject: "Contato Miolo Mole Site"}));
        transport.sendMail(createEmail({to: email, html: contactResponseEmail({...args}) , subject: "Miolo Mole Site"}));

        return res.status(200).end();
      default: return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.end() }
};
