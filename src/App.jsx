import './styles/App.css'
import Home from './componentes/Home'
import Catalogo from './componentes/Catalogo'
import Biblioteca from './componentes/Biblioteca'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import {Route, Switch} from "wouter"
import DetalleJuego from './componentes/DetalleJuego'


function App() {
  return (
   <>
    <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/biblioteca" component={Biblioteca} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/detallejuego" component={DetalleJuego} />
      </Switch>
    <Footer />
   </>
   
  )
}

export default App
