import React, { useEffect, useState, useCallback } from "react";
import MaskedInput from "react-text-mask";
import "./App.css";

const App = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState();
  const [query, setQuery] = useState("");

  const getAddress = useCallback(async () => {
    if (query) {
      const response = await fetch(`http://localhost:4000/consulta/${query}`)
        .then(res => {
          if (res.status > 200) {
            alert("CEP inválido ou não encontrado");
          }
          return res.clone().json();
        })
        .catch(err => alert("Erro na chamada, por favor tente mais tarde."));

      if (response.cep) setAddress(response);
    }
  }, [query]);

  useEffect(() => {
    getAddress();
  }, [query, getAddress]);

  const updateCep = event => {
    setCep(event.target.value);
  };

  const formSubmit = event => {
    event.preventDefault();
    if (cep.length < 8) {
      alert("Digite um CEP válido!");
    } else {
      setQuery(cep);
      setCep("");
    }
  };

  return (
    <main>
      <div className="search-box">
        <form data-testid="cep-form" onSubmit={formSubmit}>
          <MaskedInput
            data-testid="cep-input"
            guide={false}
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
            type="text"
            value={cep}
            placeholder="00000-000"
            onChange={updateCep}
          />
          <button className="cep-form__button" type="submit">
            Buscar CEP
          </button>
        </form>
      </div>

      {address && (
        <div data-testid="address-result" className="address-result">
          <ul>
            {Object.keys(address).map(field => (
              <li key={field} className={`address-result__item`}>
                <div className="address-result__item--field">
                  {field.toUpperCase()}:
                </div>
                <div
                  data-testid={`${field}-value`}
                  className="address-result__item--value"
                >
                  {address[field]}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default App;
