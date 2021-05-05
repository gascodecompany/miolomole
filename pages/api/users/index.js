import connectDB from '../../../middleware/mongodb';
import User from '../../../models/user';
import updateModel from '../../../utils/updateModel';
import createModel from '../../../utils/createModel';
import removeModel from '../../../utils/removeModel';

const userHandle = async (req, res) => {
  const { body, method } = req;
  let { _id, userName } = body;
  let args = body ? { ...body } : {};
  try{
    switch (method) {
      case 'GET':
        try {
          if(!_id) {
            const users = await User.find();
            return res.status(200).json(users);
          }
          else { 
            const user = await User.findById(_id);
            return res.status(200).json(user);
          }
        } catch (err) { return res.status(500).end() };
      case 'PUT':
        try{
          if(!userName && !_id) { return res.status(400).json({ errorMessage: 'Parâmetros inválidos' }) };
          const updatedModel = await updateModel(args, User);
          await updatedModel.save();
          return await res.status(200).json(updatedModel);
        } catch (err) { return res.status(500).end() };
      case 'POST':
        try{
          const user = await User.find({ userName });
          if(!!user.length) { return res.status(409).json({ errorMessage: 'Usuário já cadastrado.' }) };
          const userCreated = await createModel(args, User);
          return res.status(200).json({ userCreated });
        } catch (err) { console.log(err); res.status(500).end() };
      case 'DELETE':
        try{
          await removeModel(_id, User)
          return res.status(200).json({ message: 'Usuário excluído com sucesso!'});
        } catch (err) { return res.status(500).end() };
      default:
        return res.status(405).json({ errorMessage: `Method ${method} Not Allowed` })
    }
  } catch (err) { return res.status(500).end() }
};

export default connectDB(userHandle);