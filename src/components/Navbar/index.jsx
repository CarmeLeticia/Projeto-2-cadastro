import "./Navbar.css";

const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav && active" : "sidenav"}>
      <ul>
        <li>
          <a href="/clientes" class="clientes" > 
            Clientes
          </a>
        </li>
        <li>
          <a href="/">
            Cadastro
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
