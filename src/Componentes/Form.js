import 'react-datepicker/dist/react-datepicker.min.css'
import React from 'react'
import './Form.css'
import swal from 'sweetalert'
import DatePicker from 'react-datepicker'

export default class Form extends React.Component {
    state = {
        fecha: new Date(),
        peso: ""
    }
    onSubmit = () => {

        const { fecha } = this.state

        // const fecha = evt.target.fecha.value
        const { peso } = this.state
        console.log(fecha, peso, 'Componente Formulario')
        if (!peso || peso < 0 || isNaN(peso)) {
            swal('Lectura invalida', 'El registro de peso debe ser valido', 'error')
        } else {
            this.props.onRegistro(this.state)
        }
    }
    cambioFecha = (fecha) => {
        this.setState({ fecha })
    }
    cambioPeso = evt => {
        this.setState({ peso: evt.target.value })
    }
    render() {
        return (
            <div className="row">
                <div className={`form-container scale-transition scale-out ${this.props.visible ? "scale-in" : ""} col s4 offset-s4 z-depth-4 cyan lighten-3`}>
                    <form  className={`col s6 offset-s4`}>
                        <label htmlFor="fecha">
                            Fecha:
                            <DatePicker
                                selected={this.state.fecha}
                                onChange={this.cambioFecha}
                            />
                        </label>

                        <label htmlFor="peso" >
                            Peso:
                            <input
                                id="peso"
                                name="peso"
                                onChange={this.cambioPeso}
                                value={this.state.peso}
                                type="text"
                            />
                        </label>
                        <input type="button" className="btn" onClick={this.onSubmit} value="Agregar"></input>
                        <input type="button" className="btn" onClick={() => this.props.onCerrar()} value="Cerrar"></input>
                    </form>
                </div>
            </div >
        )
    }
}