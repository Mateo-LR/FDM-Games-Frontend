
import "../styles/Registro.css";
import { Link } from "wouter";

export default function Login() {
    return (
        <div className="registro-container">

            <div className="registro-img"></div>

            <div className="form-registro">

                <h2>Registro</h2>

                <form>

                    <div className="campo">
                        <label>
                            Nombre de usuario
                        </label>
                        <input 
                            type="text"
                            placeholder="Usuario1" 
                        />
                    </div>

                    <div className="campo">
                        <label>
                            Correo electrónico
                        </label>
                        <input 
                            type="email" 
                            placeholder="usuario1@gmail.com"
                        />
                    </div>

                    <div className="campo">
                        <label>
                            Crear contraseña
                        </label>

                        <div className="input-password">
                            <input 
                                type="password" 
                                placeholder="password1"
                            />
                            <span className="ojo">◉</span>
                        </div>
                    </div>

                    <button type="submit" className="btn-registro">
                        Registrarse
                    </button>

                </form>

                <div className="redireccion">
                    <span>Ya tenés cuenta?</span>
                    <Link href="/login" className="redir-reg">
                        Inicia sesión
                    </Link>
                </div>

            </div>

        </div>
    );
}
