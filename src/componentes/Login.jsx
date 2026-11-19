
import "../styles/Login.css";
import { Link } from "wouter";

export default function Login() {
    return (
        <div className="login-container">
            <div className="form-login">

                <h2>Login</h2>

                <form>
                    <div className="campo">
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            placeholder="Pepito12345"
                        />
                    </div>

                    <div className="campo">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            placeholder="pepito_12345"
                        />

                        <span className="ojo">◉</span>
                    </div>

                    <button type="submit" className="btn-login">
                        Login
                    </button>

                    <button
                        type="button"
                        className="btn-google"
                    >
                        <span className="google-icon">G</span>
                        Iniciar sesión con Google
                    </button>

                </form>

                <div className="redireccion">

                    <span>¿Todavía no tenés cuenta?</span>

                    <Link href="/registro" className="redir-reg">
                        Registrate acá
                    </Link>

                </div>

            </div>

            <div className="login-img"></div>

        </div>
    );
}
