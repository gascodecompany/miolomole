import jwt from 'jsonwebtoken'
import User from '../../../models/user'

const getCurrentUser = async (req, res) => {
  try {
    const { method } = req;
    switch (method) {
      case 'GET':
        const { token: reqToken } = req.query
        if(!reqToken) { return res.status(422).json({ errMessage: 'Argumentos inválidos' }) }
        if(jwt.verify(reqToken, process.env.SECRET_KEY)){
          const { _id } = jwt.decode(reqToken, process.env.SECRET_KEY)
          if(!_id) return res.status(401).json({ errMessage: 'Token inválido' });
          const { userName, token } = await User.findById(_id);
          if ( reqToken !== token ) return res.status(401).json({ errMessage: 'Token inválido' });
          return res.status(200).json({ _id, userName, token })
        } else return res.status(401).json({ errMessage: 'Token inválido' })
      default: return res.status(405).json({ errMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.end() }
}

export default getCurrentUser