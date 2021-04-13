import connectDB from '../../../middleware/mongodb';
import Text from '../../../models/text';

const textos = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const texts = await Text.find({ page: req.query.page });
        return res.status(200).send(texts);
      } catch (err) { return res.status(500).send(err.message) }
    case 'PUT':
      try {
        const { textKey, text, editedBy, page } = req.body;
        if(!textKey && !text) { return res.status(422).send('Dados Incompletos') };
        try {
          var oldText = await Text.findOne({ textKey: textKey });
          if (oldText) {
            oldText.text = text;
            oldText.editedBy = editedBy;
            var oldTextUpdated = await oldText.save();
            return res.status(200).send(oldTextUpdated);
          } else {
            var newText = new Text({ textKey, text, page, editedBy });
            var textCreated = await newText.save();
            return res.status(200).send(textCreated);
          }
        } catch (err) { return res.status(500).send(err.message) }
      } catch (err) { return res.status(500).send(err.message) }
    case 'POST': 
      const { textKey, text, page, editedBy } = req.body;
      if (textKey && text && page) {
        try {
          var newText = new Text({ textKey, text, page, editedBy });
          var textCreated = await newText.save();
          return res.status(200).send(textCreated);
        } catch (error) { return res.status(500).send(error.message) }
      } else { return res.status(422).send('data_incomplete'); }
    default:
      // res.setHeader('Allow', ['GET', 'PUT'])
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
  
};

export default connectDB(textos);