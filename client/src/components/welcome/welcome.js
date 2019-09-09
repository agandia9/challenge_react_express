import React, {Component } from 'react'
import './welcome.css'

export class Welcome extends Component {
    render(){
        return(
            <div className="welcome-info">
                <h3> Bienvenido/a al precurso de preparación para el bootcamp de Skylab Coders. </h3>
                <div className="info">
                    <p>En este curso sentaremos las bases sobre las que construiremos cuando empiece el curso presencial. Tanto si has programado antes como si no lo has hecho, es fundamental que lo termines.
                        Verás que tienes una serie de videos introductorios, ejercicios y un proyecto que cierra cada tema. Cualquier duda que tengas, busca por internet, pregúntanosla, o acude a tus compañeros en Slack. Hacer el curso de Skylab Coders es un ejercicio de equipo. Cuando termines cada proyecto, mándalo a cualquiera de los profesores asistentes de tu promoción.
                        </p>
                        <h3>Adelante!!!!</h3>
                </div>
            </div>
        )
    }
}