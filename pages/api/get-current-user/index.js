import jwt from 'jsonwebtoken'
import User from '../../../models/user'

const getCurrentUser = async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const { token: reqToken } = req.query
        if(!reqToken) { return res.status(422).json({ errMessage: 'Argumentos inválidos' }) }
        if(jwt.verify(reqToken, process.env.SECRET_KEY)){
          const { _id } = jwt.decode(reqToken, process.env.SECRET_KEY)
          if(!_id) return res.status(401).json({ errMessage: 'Token inválido' });
          const { userName, token } = await User.findById(_id);
          if ( reqToken !== token ) return res.status(401).json({ errMessage: 'Token inválido' });
          return res.status(200).json({ _id, userName, token })
        } else return res.status(401).send("err")
      } catch (err) { return res.status(400).json({ errMessage: err.message }) };
    default:
      res.setHeader('Allow', ['GET'])
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default getCurrentUser