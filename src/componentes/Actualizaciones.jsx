import React from "react";
import "../styles/Actualizaciones.css";

export default function Actualizaciones() {

    const actualizaciones = [
        {
            texto: "Incorporar compras reales",
            estado: "pendiente"
        },
        {
            texto: "Añadir secciones de comentarios en los juegos",
            estado: "pendiente"
        },
        {
            texto: "Implementar una sección de comunidades para los usuarios",
            estado: "pendiente"
        },
    ];

    return (
        <div className="actualizaciones">

            <h2 className="titulo-actualizaciones">
                Próximas actualizaciones
            </h2>

            <div className="contenedor-actualizaciones">

                {actualizaciones.map((actualizacion, index) => (
                    <div className="item-actualizacion" key={index}>

                        <span className={`indicador ${actualizacion.estado}`}>
                            ●
                        </span>

                        <p>{actualizacion.texto}</p>

                    </div>
                ))}

            </div>

            <div className="referencias-actualizaciones">

                <div>
                    <span className="indicador pendiente">●</span>
                    <span>Por añadir</span>
                </div>

                <div>
                    <span className="indicador anadido">●</span>
                    <span>Añadido</span>
                </div>

                <div>
                    <span className="indicador eliminado">●</span>
                    <span>Eliminado</span>
                </div>

                <div>
                    <span className="indicador modificado">●</span>
                    <span>Modificado</span>
                </div>

            </div>

        </div>
    );
}
