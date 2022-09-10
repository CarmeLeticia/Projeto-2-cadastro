import "./style/App.css";
import Header from "./components/Header";
import { Router } from "./router";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Router />
      </div>
    </>
  );
}

export default App;
