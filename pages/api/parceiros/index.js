import connectDB from '../../../middleware/mongodb';
import Partner from '../../../models/partner';

const textos = async (req, res) => {
  try {
    if (
      req.method !== 'POST' &&
      req.method !== 'GET' &&
      req.method !== 'PUT' && 
      req.method !== 'DELETE'
    ) { return res.status(422).send('Método não suportado') };
    
    if (req.method === 'GET') {
      const { _id } = req.body;
      if(!_id) {
        try { const partners = await Partner.find(); return res.status(200).json(partners); } 
        catch (error) { return res.status(500).send(error.message) }
      } else {
        try { const partner = await Partner.findById(_id); return res.status(200).send(partner); } 
        catch (error) { return res.status(500).send(error.message) }
      }
    }

    if (req.method === 'POST') {
      const { name, logo, description, city, books } = req.body;
      // if (!name && !logo && !description && !city && !books) {
      if (!name && !logo && !description && !city) {
        return res.status(422).send('Dados Incompletos')
      };
      const partner = await Partner.find({ name });
      if(!!partner.length) { return res.status(409).send('Nome ja cadastrado.') };
      try {
        const newPartner = new Partner({ name, logo, description, city });
        const partnerCreated = await newPartner.save();
        return res.status(200).send(partnerCreated);
      } catch (error) { return res.status(500).send(error.message) }
    }

    if (req.method === 'DELETE') {
      const { _id } = req.body;
      if (!_id) { return res.status(422).send('Dados Incompletos') };
      try {
        await Partner.findByIdAndRemove(_id);
        return res.status(200).send('Cadastro de parceiro excluído com sucesso!');
      } catch (error) { return res.status(500).send(error.message) }
    }

    if (req.method === 'PUT') {
      const { _id, name, logo, description, city, books } = req.body;
      console.log(req)
      var oldPartner = await Partner.findOne({ _id });
      if(!_id) { return res.status(400).send("Parâmetros inválidos") }
      if (oldPartner) {
        oldPartner.name = name;
        oldPartner.logo = logo;
        oldPartner.description = description;
        oldPartner.city = city;
        oldPartner.books = books;
        var oldPartnerUpdated = await oldPartner.save();
        return res.status(200).send(oldPartnerUpdated);
      }
    }

  } catch (err) { console.log(err)}
};

export default connectDB(textos);