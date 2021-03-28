import connectDB from '../../../middleware/mongodb';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import axios from 'axios';

const login = async (req, res) => {
  try {
    if (req.method !== 'POST') { return res.status(422).send('Método não suportado') };
    
    const { userName, password } = req.body;
    if (!userName && !password) { return res.status(422).send('Dados Incompletos') };

    const user = await User.findOne({ userName });
    if(!user) { return res.status(404).send('Usuário inválido') }

    if(!bcrypt.compareSync(password, user.password)) { return res.status(401).send('Usuário ou senha inválidos') } 
      
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY)
    user.token = token
    user.save()
    return res.status(200).json({ user })

  } catch (err) { console.log(err)}
};

export default connectDB(login);