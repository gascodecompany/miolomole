import jwt from 'jsonwebtoken'
import User from '../../../models/user'

const getCurrentUser = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const { token: reqToken } = req.query
      if(jwt.verify(reqToken, process.env.SECRET_KEY)){
        const { _id } = jwt.decode(reqToken, process.env.SECRET_KEY)
        const { userName, token } = await User.findById(_id)
        if ( reqToken !== token ){ return res.status(401).send("invalid token") }
        return res.status(200).json({ _id, userName, token })  
      } else { return res.status(401).send("err") }
    } else { return res.status(422).send('req_method_not_supported') }
  } catch (err) { 
    return res.status(400).json()
  }
}

export default getCurrentUser