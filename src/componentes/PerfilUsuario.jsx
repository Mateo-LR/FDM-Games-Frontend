import "../styles/PerfilUsuario.css";
import user from "../assets/iconos/icono-user.svg"

export default function PerfilUsuario() {

    const juegosComprados = [
        {
            nombre: "Resident Evil Requiem",
            imagen: "../assets/resident-evil-requiem.jpg"
        },
        {
            nombre: "Resident Evil Village",
            imagen: "../assets/resident-evil-village.jpg"
        },
        {
            nombre: "Resident Evil 7",
            imagen: "../assets/resident-evil-7.jpg"
        },
        {
            nombre: "Dying Light",
            imagen: "../assets/dying-light.jpg"
        }
    ];

    const juegosJugados = [
        {
            nombre: "Dying Light",
            tiempo: "2hs",
            imagen: "../assets/dying-light.jpg"
        }
    ];

    return (
        <div className="perfil-container">

            <div className="perfil-panel">
                <div className="usuario-info">

                    <div className="foto-usuario">
                        <img src={user} />
                    </div>

                    <div className="datos-usuario">
                        <h2>Usuario1</h2>
                        <p>Descripción...</p>
                    </div>

                    <div className="opciones-usuario">
                        <button>Modificar perfil</button>
                        <button>Ver lista de deseados</button>
                        <button>Cerrar sesión</button>
                    </div>

                </div>

                <section className="seccion-perfil">

                    <h3>Comprados recientemente</h3>

                    <div className="galeria-comprados">

                        {juegosComprados.map((juego, index) => (
                            <div className="tarjeta-perfil" key={index}>
                                <img
                                    src={juego.imagen}
                                    alt={juego.nombre}
                                />
                                <p>{juego.nombre}</p>

                            </div>
                        ))}

                    </div>

                </section>


                {/* JUEGOS JUGADOS */}

                <section className="seccion-perfil">

                    <h3>Jugados recientemente</h3>

                    <div className="galeria-jugados">

                        {juegosJugados.map((juego, index) => (
                            <div className="tarjeta-perfil" key={index}>

                                <img
                                    src={juego.imagen}
                                    alt={juego.nombre}
                                />

                                <p>{juego.nombre}</p>

                                <span>{juego.tiempo}</span>

                            </div>
                        ))}

                    </div>

                </section>

            </div>

        </div>
    );
}
