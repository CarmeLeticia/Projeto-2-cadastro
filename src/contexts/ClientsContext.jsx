import { createContext } from "react";

export const initialData = [
  {
    name: "Antonia",
    lastname: "Carvalho",
    email: "Antonia1234@hotmail.com",
    phone: "11 985749632",
    cep: "06844-065",
    adress1: "Rua do Orvalho",
    adress2: "Rua Inspirador primeiro",
    birthdate: "02/05/1977",
    cpf: "349-685-852-64",
    money: "600",
  },
  {
    name: "Mariza",
    lastname: "Nogueira",
    email: "n_eira@outlook.com",
    phone: "25 96587-3458",
    cep: "06588-674",
    adress1: "Avenida do Condador",
    adress2: "Avenida primeiro de Outubro",
    birthdate: "01/01/1990",
    cpf: "369-985-478-62",
    money: "2000",
  },
  {
    name: "Beatriz",
    lastname: "Junqueira",
    email: "B_J_advogada@iadvogados.com",
    phone: "44 95476 3287",
    cep: "06844-208",
    adress1: "Rua Nobrega nobre",
    adress2: "Avenida das Araras Azuis",
    birthdate: "05/12/1963",
    cpf: "968-852-654-87",
    money: "12000",
  },
];
export const ClientContext = createContext(initialData);
export const ClientProvider = ClientContext.Provider;

const SET_ADDCLIENT = "SET_ADDCLIENT";
export const ClientActions = {
  setAddClient(user) {
    return {
      type: SET_ADDCLIENT,
      payload: user,
    };
  },
};

export const ClientReducer = (state, action) => {
  switch (action.type) {
    case SET_ADDCLIENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
