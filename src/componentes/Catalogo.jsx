import "../styles/Catalogo.css"
import { Link } from "wouter";

export default function Catalogo() {
    return (
        <div className="catalogo">

            <div className="catalogo-header">
                <button className="btn-filtros">Filtros</button>
                <h2>Secciones</h2>
            </div>

            <section className="seccion">
                <div className="seccion-header">
                    <h3>Zombis</h3>
                    <Link href="" className="redir-sec">Ver sección completa ⟶</Link>
                </div>
                <div className="cont-juegos">
                    <span className="flecha">‹</span>
                    <div className="cont-zombis">
                        <div className="juego">
                            <div className="portada">
                                <img src="" alt="" />
                                <span className="precio">$60.000</span>
                            </div>
                            <h3>Resident Evil Requiem</h3>
                            <Link href="/detalleprod"> Detalle producto </Link>
                        </div>

                        <div className="juego">
                            <div className="portada">
                                <img src="" alt="" />
                                <span className="precio">$60.000</span>
                            </div>
                            <h3>Resident Evil Village</h3>
                        </div>

                        <div className="juego">
                            <div className="portada">
                                <img src="" alt="" />
                                <span className="precio">$60.000</span>
                            </div>
                            <h3>Resident Evil 7</h3>
                        </div>

                        <div className="juego">
                            <div className="portada">
                                <img src="" alt="" />
                                <span className="precio">$60.000</span>
                            </div>
                            <h3>Dying Light</h3>
                        </div>
                    </div>
                    <span className="flecha">›</span>
                </div>
            </section>

            <section className="seccion">
                <div className="seccion-header">
                    <h3>Zombis</h3>
                    <Link href="" className="redir-sec">Ver sección completa ⟶</Link>
                </div>
                <div className="cont-juegos">
                    <span className="flecha">‹</span>
                    <div className="cont-zombis">
                        <div className="juego">
                            <div className="portada">
                                <img src="" alt="" />
                                <span className="precio">$60.000</span>
                            </div>
                            <h3>Resident Evil Requiem</h3>
                        </div>

                        <div className="juego">
                            <div className="portada">
                                <img src="" alt="" />
                                <span className="precio">$60.000</span>
                            </div>
                            <h3>Resident Evil Village</h3>
                        </div>

                        <div className="juego">
                            <div className="portada">
                                <img src="" alt="" />
                                <span className="precio">$60.000</span>
                            </div>
                            <h3>Resident Evil 7</h3>
                        </div>

                        <div className="juego">
                            <div className="portada">
                                <img src="" alt="" />
                                <span className="precio">$60.000</span>
                            </div>
                            <h3>Dying Light</h3>
                        </div>
                    </div>
                    <span className="flecha">›</span>
                </div>
            </section>

        </div>
    );
}

