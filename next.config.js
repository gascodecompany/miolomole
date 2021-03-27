const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  target: "serverless",
  env: {
    ENVIROMENT: 'dev',
    MONGO_DB_URL: "mongodb+srv://mioloMole:mioloMole@miolomole.wn27q.mongodb.net/mioloMole?retryWrites=true&w=majority",
    API_URL: 'http://localhost:3000/api/',
    URL: 'http://localhost:3000',
    AWS_KEY: 'AKIA4PBYEWZ7FGSF4BVC',
    AWS_BUCKET: 'eurekadigital',
    AWS_REGION: 'sa-east-1',
    AWS_SECRET: 'Wg3rfyiXoWkPNVbIzL9VPjNEQhvaPHht0MrBFVfo',
    AWS_SERVICE: 's3',
    SECRET_KEY: 'Arz.nst4FUEcb?V78bfc,}6+5_!@}^'
  }
});
