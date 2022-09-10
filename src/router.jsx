import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  UserProvider,
  UserReducer,
  initialData as userData,
} from "./contexts/FormContext";
import {
  ClientProvider,
  ClientReducer,
  initialData,
} from "./contexts/ClientsContext";
import { useReducer } from "react";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";
import Clientes from "./pages/Clientes/Clientes";

export const Router = () => {
  const userDispatch = useReducer(UserReducer, userData);
  const clientDispatch = useReducer(ClientReducer, initialData);

  return (
    <BrowserRouter>
      <UserProvider key="UserProvider" value={userDispatch}>
        <ClientProvider key="ClientProvider" value={clientDispatch}>
          <Routes>
            <Route path="/" expect element={<Form1 />} />
            <Route path="/step2" element={<Form2 />} />
            <Route path="/step3" element={<Form3 />} />
          </Routes>
        </ClientProvider>
      </UserProvider>
      <ClientProvider key="ClientProvider" value={clientDispatch}>
        <Routes>
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </ClientProvider>
    </BrowserRouter>
  );
};
