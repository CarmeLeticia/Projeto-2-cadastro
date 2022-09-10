import { useContext, React } from "react";
import { useNavigate } from "react-router-dom";
import { UserActions, UserContext } from "../../contexts/FormContext";
import styles from "./Form1.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function FormStep1() {
  const navigateTo = useNavigate();
  const [user, dispatch] = useContext(UserContext);
  console.log({ user });

  const handleNextStep = () => {
    if (user.name !== "") {
      navigateTo("/step2");
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <>
      <div className={styles.section}>
        <h2> Cadastro</h2>
      </div>
      <Form className={styles.form} as={Col} md="12">
        <Row className="mb-3">
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              required
              autoFocus
              type="text"
              value={user.name}
              onChange={(e) => dispatch(UserActions.setName(e.target.value))}
              placeholder="Digite seu nome aqui"
            />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              required
              type="text"
              value={user.lastname}
              onChange={(e) =>
                dispatch(UserActions.setLastName(e.target.value))
              }
              placeholder="Digite seu sobrenome aqui"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              required
              type="email"
              value={user.email}
              onChange={(e) => dispatch(UserActions.setEmail(e.target.value))}
              placeholder="exemplo@email.com"
            />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="tel"
              value={user.phone}
              onChange={(e) => dispatch(UserActions.setPhone(e.target.value))}
              placeholder="Digite aqui o seu telefone"
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              required
            />
          </Form.Group>
        </Row>
        <Col className={styles.button}>
          <Button
            type="submit"
            className={styles.btn}
            onClick={handleNextStep}
            class="btn btn-outline-success"
          >
            Próximo
          </Button>
        </Col>
      </Form>
    </>
  );
}
