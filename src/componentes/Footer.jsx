
import "../styles/Footer.css";
import Logo from "../assets/Logo-fdm.png"
import { Link } from "wouter";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={Logo}/>
                <h2>FDM Games</h2>
            </div>

            <div className="footer-contenido">
                <div className="footer-contacto">
                    <h3>Contactanos</h3>
                    <p>Tel.: 1232 123 13</p>
                    <p>Correo: fdmgames@gmail.com</p>
                </div>

                <nav className="footer-links">
                    <Link href="/catalogo">
                        Catálogo
                    </Link>
                    <span className="separador"></span>
                    <Link href="/sobrenosotros">
                        Sobre nosotros
                    </Link>
                    <span className="separador"></span>
                    <Link href="/actualizaciones">
                        Próximas actualizaciones
                    </Link>

                </nav>

            </div>

        </footer>
    );
}