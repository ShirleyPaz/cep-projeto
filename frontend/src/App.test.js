import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import App from "./App";

const validCep = "04578910";
const validCepRes = "04578-910";

const invalidCep = "XXXX";
const invalidCepRes = "Cep inválido";

const notFoundCep = "00000000";
const notFoundCepRes = "Cep não foi encontrado na base de dados";

test("return a valid address", async () => {
  const { container, queryByTestId } = render(<App />);

  const input = queryByTestId("cep-input");
  const form = queryByTestId("cep-form");

  fireEvent.change(input, { target: { value: "04578910" } });
  fireEvent.submit(form);

  await waitForElement(() => queryByTestId("cep-value"));
  expect(queryByTestId("cep-value").childNodes[0].textContent).toMatch(validCepRes);
});
