import connectDB from '../../../middleware/mongodb';
import User from '../../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const loginHandler = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case 'POST':
        const { userName, password } = req.body;
        if (!userName && !password) { return res.status(422).json({ message: 'Dados Incompletos'}) };
        const user = await User.findOne({ userName });
        if(!user) { return res.status(404).json({ message: 'Usuário inválido' }) };
        if(!bcrypt.compareSync(password, user.password)) { return res.status(401).json({ message: 'Usuário ou senha inválidos' }) };
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
        user.token = token;
        user.save();
        return res.status(200).json({ user });
      default: return res.status(405).json({ errMesage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.end() }
};

export default connectDB(loginHandler);
