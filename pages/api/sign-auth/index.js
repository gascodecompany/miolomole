import crypto from "crypto";

function hmac(key, value) { return crypto.createHmac("sha256", key).update(value).digest() }
function hexhmac(key, value) { return crypto.createHmac("sha256", key).update(value).digest("hex");}

const singAuth = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const { datetime, to_sign } = req.query;
      if (datetime && to_sign) {
        const timestamp = datetime.substr(0, 8);
        const date = hmac("AWS4" + process.env.AWS_SECRET, timestamp);
        const region = hmac(date, process.env.AWS_REGION);
        const service = hmac(region, process.env.AWS_SERVICE);
        const signing = hmac(service, "aws4_request");
        res.send(hexhmac(signing, to_sign));
        } else { return res.status(422).send('data_incomplete'); }
    } else { return res.status(422).send('req_method_not_supported');}
  } catch (err) { 
    res.status(500).json({ statusCode: 500, message: err.message })
  }
};

export default singAuth;