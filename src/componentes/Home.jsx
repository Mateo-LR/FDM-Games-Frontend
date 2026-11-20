import "../styles/Home.css"
import IMG from "../assets/img-banner2.webp"
import terror from "../assets/iconos/icono-terror.svg"
import survival from "../assets/iconos/icono-survival.svg"
import shooter from "../assets/iconos/icono-shooter.svg"
import sandbox from "../assets/iconos/icono-sandbox.svg"
import { Link } from "wouter"

export default function Home() {
    return (
        <>
            <body>
                <div className="banner">
                    <img src={IMG} alt="Banner Fondo" />
                    <div className="texto-banner">
                        <p>
                            Descubre más
                            <br />
                            de nuestra
                            <br />
                            amplia variedad
                            <br />
                            de videojuegos
                        </p>
                        <Link href="/catalogo" className="btn-ver-mas">Ver más</Link>
                    </div>
                </div>
                <div className="cat-dest">
                    <div className="titulo">
                        <div className="linea-dec">
                        </div>
                        <h2>Categorías destacadas</h2>
                        <div className="linea-dec">
                        </div>
                    </div>

                    <div className="cont-cat">
                        <div className="categoria">
                            <Link href="/catalogo" className="icono-cat">
                                <img src={terror} alt="Terror" />
                            </Link>
                            <h3>Terror</h3>
                        </div>
                        <div className="categoria">
                            <Link href="/catalogo" className="icono-cat">
                                <img src={survival} alt="Survival" />
                            </Link>
                            <h3>Survival</h3>
                        </div>
                        <div className="categoria">
                            <Link href="/catalogo" className="icono-cat">
                                <img src={shooter} alt="Shooter" />
                            </Link>
                            <h3>Shooter</h3>
                        </div>
                        <div className="categoria">
                            <Link href="/catalogo" className="icono-cat">
                                <img src={sandbox} alt="Sandbox" />
                            </Link>
                            <h3>Sandbox</h3>
                        </div>
                    </div>
                </div>

                <div className="juegos-dest">
                    <div className="titulo">
                        <div className="linea-dec"></div>
                        <h2>Juegos destacados</h2>
                        <div className="linea-dec"></div>
                    </div>

                    <div className="layout-juegos-dest">
                        <aside className="sidebar-categorias">
                            <h3>Categorías</h3>
                            
                            <div className="cat-lateral-item">
                                <Link href="/catalogo" className="icono-cat-lateral">
                                    <img src={terror} alt="Terror" />
                                </Link>
                                <span>Terror</span>
                            </div>

                            <div className="cat-lateral-item">
                                <Link href="/catalogo" className="icono-cat-lateral">
                                    <img src={survival} alt="Survival" />
                                </Link>
                                <span>Survival</span>
                            </div>

                            <div className="cat-lateral-item">
                                <Link href="/catalogo" className="icono-cat-lateral">
                                    <img src={shooter} alt="Shooter" />
                                </Link>
                                <span>Shooter</span>
                            </div>
                        </aside>

                        <div className="grid-juegos-dest">
                            <Link href="/detallejuego" className="card-juego-dest">
                                <span className="ribbon-precio">$103.000</span>
                                <img src="URL_PORTADA_RE_REQUIEM" alt="Resident Evil Requiem" />
                            </Link>

                            <Link href="/detallejuego" className="card-juego-dest">
                                <span className="ribbon-precio">$60.000</span>
                                <img src="URL_PORTADA_RE_VILLAGE" alt="Resident Evil Village" />
                            </Link>

                            <Link href="/detallejuego" className="card-juego-dest">
                                <span className="ribbon-precio">$60.000</span>
                                <img src="URL_PORTADA_RE_VII" alt="Resident Evil VII" />
                            </Link>

                            <Link href="/detallejuego" className="card-juego-dest">
                                <span className="ribbon-precio">$60.000</span>
                                <img src="URL_PORTADA_DYING_LIGHT" alt="Dying Light" />
                            </Link>

                            <Link href="/detallejuego" className="card-juego-dest">
                                <span className="ribbon-precio">$60.000</span>
                                <img src="URL_PORTADA_DYING_LIGHT_2" alt="Dying Light 2" />
                            </Link>

                            <Link href="/detallejuego" className="card-juego-dest">
                                <span className="ribbon-precio">$103.000</span>
                                <img src="URL_PORTADA_DYING_LIGHT_BEAST" alt="Dying Light The Beast" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mas-vendidos-section">
                    <div className="titulo">
                        <div className="linea-dec"></div>
                        <h2>Los más vendidos</h2>
                        <div className="linea-dec"></div>
                    </div>

                    <div className="cont-mas-vendidos">
                        <Link href="/detallejuego" className="item-ranking">
                            <span className="badge-ranking top-1">1</span>
                            <img src={IMG} alt="Resident Evil Requiem" />
                            <div className="info-ranking">
                                <h4>Resident Evil Requiem</h4>
                                <span className="precio-ranking">$103.000</span>
                            </div>
                        </Link>

                        <Link href="/detallejuego" className="item-ranking">
                            <span className="badge-ranking">2</span>
                            <img src={IMG} alt="Resident Evil Village" />
                            <div className="info-ranking">
                                <h4>Resident Evil Village</h4>
                                <span className="precio-ranking">$60.000</span>
                            </div>
                        </Link>

                        <Link href="/detallejuego" className="item-ranking">
                            <span className="badge-ranking">3</span>
                            <img src={IMG} alt="Dying Light" />
                            <div className="info-ranking">
                                <h4>Dying Light</h4>
                                <span className="precio-ranking">$60.000</span>
                            </div>
                        </Link>

                        <Link href="/detallejuego" className="item-ranking">
                            <span className="badge-ranking">4</span>
                            <img src={IMG} alt="Dying Light The Beast" />
                            <div className="info-ranking">
                                <h4>Dying Light The Beast</h4>
                                <span className="precio-ranking">$103.000</span>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="proximos-section">
                    <div className="titulo">
                        <div className="linea-dec"></div>
                        <h2>Próximos lanzamientos</h2>
                        <div className="linea-dec"></div>
                    </div>

                    <div className="grid-proximos">
                        <div className="card-proximo">
                            <span className="badge-lanzamiento">Próximamente</span>
                            <img src={IMG} alt="Juego Futuro 1" />
                            <div className="proximo-info">
                                <h3>Cyberpunk Sequel</h3>
                                <p>Lanzamiento: Q3 2026</p>
                            </div>
                        </div>

                        <div className="card-proximo">
                            <span className="badge-lanzamiento">Próximamente</span>
                            <img src={IMG} alt="Juego Futuro 2" />
                            <div className="proximo-info">
                                <h3>Silent Hills Remake</h3>
                                <p>Lanzamiento: Q4 2026</p>
                            </div>
                        </div>

                        <div className="card-proximo">
                            <span className="badge-lanzamiento">Próximamente</span>
                            <img src={IMG} alt="Juego Futuro 3" />
                            <div className="proximo-info">
                                <h3>Biohazard Outbreak</h3>
                                <p>Lanzamiento: 2027</p>
                            </div>
                        </div>
                    </div>
                </div>


            </body>

        </>
    )
}