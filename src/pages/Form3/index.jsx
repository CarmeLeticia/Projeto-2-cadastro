import styles from "./Form3.module.css";
import { useContext } from "react";
import { UserActions, UserContext } from "../../contexts/FormContext";
import { ClientActions, ClientContext } from "../../contexts/ClientsContext";
import { useNavigate, Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";

export default function FormStep3() {
  const navigate = useNavigate();
  const [user, dispatch] = useContext(UserContext);
  const [_clients, clientDispatch] = useContext(ClientContext);
  console.log({ user });

  const handleSubmit = (e) => {
    e.preventDefault();
    clientDispatch(ClientActions.setAddClient(user));
    navigate("/clientes");
  };

  return (
    <>
      <div className={styles.section}>
        <h3> Cadastro</h3>
      </div>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={user.cpf}
              onChange={(e) => dispatch(UserActions.setCpf(e.target.value))}
              placeholder="455.564.000-00"
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              value={user.birthdate}
              onChange={(e) =>
                dispatch(UserActions.setBirthDate(e.target.value))
              }
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="4" className="mb-3">
            <Form.Label>Renda Mensal</Form.Label>
            <Form.Control
              type="text"
              value={user.money}
              onChange={(e) => dispatch(UserActions.setMoney(e.target.value))}
              placeholder="R$"
              required
            />
          </Form.Group>
        </Row>
        <div className={styles.button}>
          <Button className={styles.btn} type="submit">
            <Link to="/step2">Voltar</Link>
          </Button>
          <Button className={styles.btn} type="submit">
            Salvar
          </Button>
        </div>
      </Form>
    </>
  );
}
