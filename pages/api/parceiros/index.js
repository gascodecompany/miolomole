import connectDB from '../../../middleware/mongodb';
import Partner from '../../../models/partner';
import updateModel from '../../../utils/updateModel';
import createModel from '../../../utils/createModel';
import removeModel from '../../../utils/removeModel';

const partnerHandler = async (req, res) => {
  const { body, method } = req;
  const { _id } = body;
  const args = body ? { ...body } : {};

  const putHandler = () => {
    if(!_id) { return res.status(400).send('Parâmetros inválidos') }
    const updatedModel = await updateModel(args, Partner)
    await updatedModel.save()
    return await res.status(200).json(updatedModel)
  }

  const getHandler = () => {
    try{
      if(!_id) {
        try { const partners = await Partner.find(); return res.status(200).json(partners); } 
        catch (error) { return res.status(500).end(error.message) }
      } 
      else {
        try { const partner = await Partner.findById(_id); return res.status(200).json(partner); } 
        catch (error) { return res.status(500).end(error.message) }
      }
    } catch (err) { return res.status(500).end(error.message) }
  }

  const postHandler = () => {
    // if (!name && !logo && !description && !city && !books) {
    //   return res.status(422).send('Dados Incompletos')
    // };
    const partner = await Partner.find({ name: args?.name });
    if(!!partner.length) { return res.status(409).end('Parceiro ja cadastrado.') };
    try {
      const partnerCreated = await createModel()
      return res.status(200).send(partnerCreated);
    } catch (error) { return res.status(500).end(error.message) }
  }

  const deleteHandler = () => {
    try {
      await removeModel(_id, Partner)
      return res.status(200).send('Cadastro excluído com sucesso!');
    } catch (error) { return res.status(500).send(error.message) }
  }

  try{
    switch (method) {
      case 'GET': getHandler()
      case 'PUT': putHandler()
      case 'POST': postHandler()
      case 'DELETE': deleteHandler()
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'POST', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (err) {
    return res.status(500).json()
  }
  
};

export default connectDB(partnerHandler);