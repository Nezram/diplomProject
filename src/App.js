import ToDo from "./Components/ToDo/ToDo";
import MoneyHelper from "./Components/moneyHelper/MoneyHelper";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <ul class="nav justify-content-start">
          <li class="nav-item">
            <Link className="nav-link text-light"  to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-light" to="/money">Money</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-light"  to="/todo">Todo</Link>
          </li>
          <li class="nav-item"></li>
        </ul>
      </header>

      <Routes>
        <Route path="/" />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/money" element={<MoneyHelper />} />
      </Routes>
    </>
  );
}

export default App;
