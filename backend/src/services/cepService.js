const request = require("request");

exports.getCepService = cep => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      // erro ao realizar a chamada
      if (err) {
        return reject({ status: res.statusCode, message: err });
      }

      if (res.statusCode == 400) {
        // cep inválido
        return resolve({
          status: res.statusCode,
          message: "Cep inválido"
        });
      }

      const data = JSON.parse(body);
      // cep não encontrado
      if (data.erro) {
        return resolve({
          status: 406,
          message: "Cep não foi encontrado na base de dados"
        });
      }

      // cep retornado
      const { cep, logradouro, localidade, uf } = data;
      return resolve({
        status: res.statusCode,
        message: { cep, logradouro, localidade, uf }
      });
    });
  });
};
