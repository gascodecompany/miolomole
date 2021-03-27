import jwt from 'jsonwebtoken'
import User from '../../../models/user'

const getCurrentUser = async (req, res) => {
  try {
    if (req.method === 'GET') {
      console.log(req.query)
      const { token } = req.query
      if(jwt.verify(token, process.env.secret_key)){
        const { _id } = jwt.decode(token, process.env.secret_key)
        const user = await User.findById(_id)
        res.status(200).json(user)
      } else res.status(401).send("err")
    } else { res.status(422).send('req_method_not_supported');}
  } catch (err) { console.log(err) }
}

export default getCurrentUser