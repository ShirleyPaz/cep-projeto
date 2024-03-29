const cepService = require("../services/cepService");

exports.getCep = async (req, res) => {
  const cep = req.params.cep;
  try {
    let addressInfo = await cepService.getCepService(cep);
    if (addressInfo.status > 200) {
      res.status(406).send({ message: addressInfo.message });
    }
    res.status(addressInfo.status).send(addressInfo.message);
  } catch (error) {
    // erro ao realizar a chamada
    res.status(500).send({ message: "Por favor, tente novamente mais tarde." });
  }
};
