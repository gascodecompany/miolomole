import jwt from 'jsonwebtoken'
import User from '../../../models/user'

const getCurrentUser = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const { token: reqToken } = req.query
      if(jwt.verify(reqToken, process.env.SECRET_KEY)){
        const { _id } = jwt.decode(reqToken, process.env.SECRET_KEY)
        const { userName, token } = await User.findById(_id)
        if ( reqToken !== token ){ res.status(401).send("invalid token") }
        res.status(200).json({ _id, userName, token })  
      } else res.status(401).send("err")
    } else { res.status(422).send('req_method_not_supported') }
  } catch (err) { res.status(400).send(); console.log(err) }
}

export default getCurrentUser