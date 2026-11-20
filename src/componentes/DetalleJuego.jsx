
import "../styles/DetalleJuego.css";

export default function DetalleJuego() {
    return (
        <div className="detalle-juego">
            <div className="contenido-juego">
                <div className="imagenes-juego">

                    <div className="portada-principal">
                        <img
                            src="../assets/dying-light.jpg"
                            alt="Dying Light"
                        />
                    </div>

                    <div className="miniaturas">
                        <img src="../assets/" alt="" />
                        <img src="../assets/dying-light-3.jpg" alt="" />
                    </div>

                    <div className="compra-juego">
                        <h3>$103.000</h3>
                        <button className="btn-carrito">
                            Añadir al carrito
                        </button>

                    </div>

                </div>



                <div className="info-juego">
                    <div className="banner-juego">
                        <img
                            src="../assets/dying-light-logo.png"
                            alt="Dying Light"
                        />
                    </div>

                    <div className="descripcion-juego">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint.
                        </p>
                    </div>

                    <div className="caracteristicas">

                        <div className="caracteristica">
                            <span>Categoria:</span>

                            <div className="etiquetas">
                                <span>Zombis</span>
                                <span>Terror</span>
                            </div>
                        </div>

                        <div className="caracteristica">
                            <span>Tipo:</span>

                            <div className="etiquetas">
                                <span>Un jugador</span>
                                <span className="etiqueta-secundaria">
                                    Multijugador
                                </span>
                            </div>
                        </div>

                        <div className="caracteristica">
                            <span>Saga:</span>
                            <span className="nombre-saga">
                                Dying Light
                            </span>
                        </div>

                    </div>

                </div>

            </div>

            <section className="complementos">

                <div className="complementos-header">
                    <h3>Complementos</h3>

                    <a href="#">
                        Ver más complementos →
                    </a>
                </div>

                <div className="lista-complementos">

                    <div className="complemento">
                        <img
                            src="../assets/dying-light-following.jpg"
                            alt="Dying Light The Following"
                        />

                        <p>
                            Dying Light
                            <br />
                            The Following
                            <br />
                            Enhanced Edition
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
