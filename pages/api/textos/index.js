import connectDB from '../../../middleware/mongodb';
import Text from '../../../models/text';

const textos = async (req, res) => {
  try {
    if (req.method === 'GET') {
      try {
        const texts = await Text.find({ page: req.query.page });
        return res.status(200).send(texts);
      } catch (error) { return res.status(500).send(error.message) }
    } else if (req.method === 'POST') {
      const { textKey, text, page, editedBy } = req.body;
      if (textKey && text && page) {
          try {
            var newText = new Text({ textKey, text, page, editedBy });
            var textCreated = await newText.save();
            return res.status(200).send(textCreated);
          } catch (error) { return res.status(500).send(error.message) }
        } else { return res.status(422).send('data_incomplete'); }
    } else if (req.method === 'PUT') {
      const { textKey, text, editedBy, page } = req.body;
      if (textKey && text) {
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
          } catch (error) { return res.status(500).send(error.message) }
        } else { return res.status(422).send('data_incomplete'); }
    } else { return res.status(422).send('req_method_not_supported');}
  } catch (err) { 
    res.status(500).json({ statusCode: 500, message: err.message })
  }
};

export default connectDB(textos);