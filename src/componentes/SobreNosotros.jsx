import "../styles/SobreNosotros.css";

export default function SobreNosotros() {
    return (
        <div className="sobre-nosotros">

            <h2 className="titulo-sobre">Sobre Nosotros</h2>

            <div className="contenedor-info">

                <section className="apartado-info">
                    <h3>¿Quiénes somos?</h3>

                    <p>
                        FDM Games (Fin del Mundo Games) es un proyecto
                        orientado a la venta de videojuegos, pensado para
                        acercar el mundo de los videojuegos a todas las
                        personas. Buscamos ofrecer un espacio donde los
                        usuarios puedan descubrir diferentes títulos y
                        encontrar nuevas experiencias para disfrutar.
                    </p>
                </section>

                <section className="apartado-info">
                    <h3>Nuestra propuesta</h3>

                    <p>
                        Nuestra plataforma busca brindar una experiencia
                        sencilla y accesible, permitiendo explorar un
                        catálogo de videojuegos, consultar información
                        sobre cada título y realizar compras de manera
                        práctica. Además, cada usuario podrá contar con
                        un espacio personal para organizar sus juegos.
                    </p>
                </section>

                <section className="apartado-info">
                    <h3>Nuestro objetivo</h3>

                    <p>
                        En FDM Games queremos que cualquier persona
                        pueda acceder fácilmente a sus videojuegos
                        favoritos. Nuestro objetivo es desarrollar un
                        sitio que reúna variedad, comodidad y facilidad
                        de uso, ofreciendo una plataforma en la que
                        descubrir, adquirir y disfrutar nuevos juegos.
                    </p>
                </section>

            </div>
        </div>
    );
}