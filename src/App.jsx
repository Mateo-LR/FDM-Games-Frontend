import './styles/App.css'
import {Route, Switch} from "wouter"
import Home from './componentes/Home'
import Catalogo from './componentes/Catalogo'
import Biblioteca from './componentes/Biblioteca'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import DetalleJuego from './componentes/DetalleJuego'
import PerfilUsuario from './componentes/PerfilUsuario'
import SobreNosotros from './componentes/SobreNosotros'
import Actualizaciones from './componentes/Actualizaciones'



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
        <Route path="/perfilusuario" component={PerfilUsuario} />
        <Route path="/sobrenosotros" component={SobreNosotros} />
        <Route path="/actualizaciones" component={Actualizaciones} />
      </Switch>
    <Footer />
   </>
   
  )
}

export default App
