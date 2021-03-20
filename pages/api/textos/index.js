import connectDB from '../../../middleware/mongodb';
import Text from '../../../models/text';

export default async function handler (req, res) {
  if (req.method === 'GET') {
    return res.status(200).send({ 
      title: 'LER É COMO SAIR DE CASA, \nA GENTE SEMPRE VOLTA DIFERENTE!',
      call: 'A literatura estimula os processos cognitivos e ativa a imaginação. O “miolo” por ser “mole” é livre para receber o hábito da leitura. A mente está aberta às novas experiências e sensações!'
    });
  //   // Check if name, email or password is provided
  //   const { name, email, password } = req.body;
  //   if (name && email && password) {
  //       try {
  //         // Hash password to store it in DB
  //         var passwordhash = await bcrypt.sign(password);
  //         var user = new User({
  //           name,
  //           email,
  //           password: passwordhash,
  //         });
  //         // Create new user
  //         var usercreated = await user.save();
  //         return res.status(200).send(usercreated);
  //       } catch (error) {
  //         return res.status(500).send(error.message);
  //       }
  //     } else {
  //       res.status(422).send('data_incomplete');
  //     }
  // } else {
  //   res.status(422).send('req_method_not_supported');
  }
};
