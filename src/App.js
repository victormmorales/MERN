import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Componentes:
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

// Context
import ProyectoState from './context/proyectos/proyectoState';

function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
    </ProyectoState>
    );
}

export default App;
