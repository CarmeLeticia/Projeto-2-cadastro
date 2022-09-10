import { createContext } from "react";

export const initialData = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  cep: "",
  adress1: "",
  adress2: "",
  birthdate: "",
  cpf: "",
  money: "",
};

export const UserContext = createContext(initialData);
export const UserProvider = UserContext.Provider;

const SET_NAME = "SET_NAME";
const SET_LASTNAME = "SET_LASTNAME";
const SET_EMAIL = "SET_EMAIL";
const SET_PHONE = "SET_PHONE";
const SET_CEP = "SET_CEP";
const SET_ADRESS1 = "SET_ADRESS1";
const SET_ADRESS2 = "SET_ADRESS2";
const SET_BIRTHDATE = "SET_BIRTHDATE";
const SET_CPF = "SET_CPF";
const SET_MONEY = "SET_MONEY";

export const UserActions = {
  setName(name) {
    return {
      type: SET_NAME,
      payload: {
        name: name,
      },
    };
  },
  setLastName(lastname) {
    return {
      type: SET_LASTNAME,
      payload: {
        lastname: lastname,
      },
    };
  },
  setEmail(email) {
    return {
      type: SET_EMAIL,
      payload: {
        email: email,
      },
    };
  },
  setPhone(phone) {
    return {
      type: SET_PHONE,
      payload: {
        phone: phone,
      },
    };
  },
  setCep(cep) {
    return {
      type: SET_CEP,
      payload: {
        cep: cep,
      },
    };
  },
  setAdress1(adress1) {
    return {
      type: SET_ADRESS1,
      payload: {
        adress1: adress1,
      },
    };
  },
  setAdress2(adress2) {
    return {
      type: SET_ADRESS2,
      payload: {
        adress2: adress2,
      },
    };
  },
  setBirthDate(birthdate) {
    return {
      type: SET_BIRTHDATE,
      payload: {
        birthdate: birthdate,
      },
    };
  },
  setCpf(cpf) {
    return {
      type: SET_CPF,
      payload: {
        cpf: cpf,
      },
    };
  },
  setMoney(money) {
    return {
      type: SET_MONEY,
      payload: {
        money: money,
      },
    };
  },
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload.name };
    case SET_LASTNAME:
      return { ...state, lastname: action.payload.lastname };
    case SET_EMAIL:
      return { ...state, email: action.payload.email };
    case SET_PHONE:
      return { ...state, phone: action.payload.phone };
    case SET_CEP:
      return { ...state, cep: action.payload.cep };
    case SET_ADRESS1:
      return { ...state, adress1: action.payload.adress1 };
    case SET_ADRESS2:
      return { ...state, adress2: action.payload.adress2 };
    case SET_BIRTHDATE:
      return { ...state, birthdate: action.payload.birthdate };
    case SET_CPF:
      return { ...state, cpf: action.payload.cpf };
    case SET_MONEY:
      return { ...state, money: action.payload.money };
    default:
      return state;
  }
};
