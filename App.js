import logo from './logo.svg';
import './App.css';
import {Router, Link, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';



function App() {

  return (
    <Router>
      <ul>
        <li><Link> to="/">Home</Link>
        </li>
        <li><Link to="/empresa">Empresa</Link>
        </li>
        <li><Link to="/contato">Contato</Link>
        </li>
      </ul>
      <Switch>
        <Router path="/">
          <Home></Home>
        </Router>
        <Router path="/empresa">
          <Empresa></Empresa>
        </Router>
        <Router path="/contato">
          <Contato></Contato>
        </Router>
      </Switch>
    </Router>
  )
}

export default App;

//Switch diz para aonde vai alterar e Route que vai ser o Roteamento de link //

