const withImages = require('next-images');

module.exports = withImages({
 esModule: true,
 target: "serverless",
 env: {
  mongodburl: "mongodb+srv://mioloMole:mioloMole@miolomole.wn27q.mongodb.net/mioloMole?retryWrites=true&w=majority",
  url: "http://localhost:3000",
  secret_key: "Arz.nst4FUEcb?V78bfc,}6+5_!@}^"
}
});
