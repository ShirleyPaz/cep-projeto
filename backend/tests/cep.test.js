const cepService = require("../src/services/cepService");

describe("Gep CEP Endpoint", () => {
  it("should return an address successfully", async () => {
    const output = {
      message: {
        cep: "04578-910",
        logradouro: "Avenida das Nações Unidas",
        localidade: "São Paulo",
        uf: "SP"
      },
      status: 200
    };

    const res = await cepService.getCepService("04578910");
    expect(res).toEqual(output);
  });
});

describe("Gep CEP Endpoint", () => {
  it("should return invalid cep", async () => {
    const output = {
      message: "Cep inválido",
      status: 400
    };

    const res = await cepService.getCepService("XXXXXXXX");
    expect(res).toEqual(output);
  });
});

describe("Gep CEP Endpoint", () => {
  it("should return address not found", async () => {
    const output = {
      message: "Cep não foi encontrado na base de dados",
      status: 406
    };

    const res = await cepService.getCepService("00000000");
    expect(res).toEqual(output);
  });
});
