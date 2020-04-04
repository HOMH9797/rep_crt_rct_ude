import React from 'react'
import './Form.css'
import swal from 'sweetalert'

export default class Form extends React.Component {
    onSubmi = (evt) => {
        evt.preventDefault()
        const fecha = evt.target.fecha.value
        const peso = evt.target.peso.value
        // console.log(fecha, peso)
        if (!peso || peso < 0) {
            swal('Lectura invalida', 'El registro de peso debe ser valido', 'error')
        }
    }
    render() {
        return (
            <div className="row">
                <div className="form-container col s4 offset-s4 z-depth-4 cyan lighten-3">
                    <form onSubmit={this.onSubmi}>
                        <label htmlFor="fecha">
                            Fecha:
                            <input type="date" name="fecha" id="fecha" />
                        </label>
                        <label htmlFor="peso">
                            Peso:
                            <input type="text" name="peso" id="peso" />
                        </label>
                        <input type="submit" value="Agregar"></input>
                        <input type="button" value="Cerrar"></input>
                    </form>
                </div>
            </div>
        )
    }
}