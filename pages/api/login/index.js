import connectDB from '../../../middleware/mongodb';
import User from '../../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const loginHandler = async (req, res) => {
  const { method } = req;
  
  switch (method) {
    case 'POST':
      try {
        const { userName, password } = req.body;
        if (!userName && !password) { return res.status(422).send('Dados Incompletos') };
        const user = await User.findOne({ userName });
        if(!user) { return res.status(404).send('Usuário inválido') }
    
        if(!bcrypt.compareSync(password, user.password)) { return res.status(401).send('Usuário ou senha inválidos') } 
        
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY)
        user.token = token
        await user.save()
        return res.status(200).json({ user })
      } catch (err) { 
        return res.status(400).json({ errMessage: err.message})
      }
    default:
      res.setHeader('Allow', ['POST'])
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
};

export default connectDB(loginHandler);