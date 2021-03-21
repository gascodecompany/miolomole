import connectDB from '../../../middleware/mongodb';
import User from '../../../models/User';
import bcrypt from 'bcrypt';

const login = async (req, res) => {
  try {
    if (req.method === 'GET') {
      try {
        const user = await User.findOne({ userName: req.body.userName});
        if(!user) return res.status(200).send('user_not_found')
        if(bcrypt.compareSync(req.body.password, user.password)) return res.status(200).send('successful_login') 
        else return res.status(403).send('invalid_data');
      } catch (error) { return res.status(500).send(error.message) }
    } else { res.status(422).send('req_method_not_supported');}
  } catch (err) { console.log(err)}
};

export default connectDB(login);