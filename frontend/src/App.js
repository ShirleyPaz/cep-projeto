import React, { useEffect, useState, useCallback } from "react";
import MaskedInput from "react-text-mask";
import "./App.css";

const App = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState();
  const [query, setQuery] = useState("");

  return (
    <main>
      <div className="search-box">
        <form data-testid="cep-form" onSubmit="">
          <MaskedInput
            data-testid="cep-input"
            guide={false}
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
            type="text"
            value={cep}
            placeholder="00000-000"
            onChange=""
          />
          <button className="cep-form__button" type="submit">
            Buscar CEP
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;
