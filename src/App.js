import React, { Component } from 'react';
import BarraTitulo from './Componentes/BarraTitulo'
import moment from 'moment'
import Grafica from './Componentes/Grafica'
import Tabla from './Componentes/Tabla';
import Form from './Componentes/Form'

moment.locale('es')
class App extends Component {
  state = {
    registros: [],
    modal: false
  }

  componentDidMount() {
    if (localStorage.getItem('registros')) {
      const registros = JSON.parse(localStorage.getItem('registros'))
      this.setState({
        registros
      })
    }
  }
  onCrearRegistro = () => {
    const nuevoRegistro = [+moment(), Math.random() * 200]
    this.setState({
      registros: [...this.state.registros, nuevoRegistro]
    })
  }
  aceptarRegistro = ({ fecha, peso }) => {
    console.log(fecha, peso)
    const nuevoregistro = [+fecha, +peso]
    const newstateregistros = [...this.state.registros, nuevoregistro]
    localStorage.setItem('registros', JSON.stringify(newstateregistros))
    this.setState((prevState, props) => ({
      registros: [...prevState.registros, nuevoregistro]
    }))
  }
  onCerrarForm = () => {
    this.setState({
      modal: false
    })
  }
  reiniciarRegistros = ()=>{
    localStorage.clear()
  }

  render() {
    const btnAdd = {
      position: "absolute",
      top: "80%",
      right: "10%"
    }

    return (
      <div className="App">
        <BarraTitulo />
        <Form visible={this.state.modal} onRegistro={this.aceptarRegistro} onCerrar={this.onCerrarForm} />
        <main>
          <div className="valign-wrapper">
            <h2>Registro diario</h2>
          </div>
          <div className="row">
            <div className="col l6 m12 s12">
              <Grafica registros={this.state.registros} />
              <a className="btn" onClick={this.reiniciarRegistros}>Recetear</a>
            </div>
            <div className="col l6 m12 s12">
              <Tabla registros={this.state.registros} />
            </div>
          </div>
        </main>
        <a className="btn-floating btn-large waves-effect waves-light red"
          style={btnAdd}
          onClick={() => this.setState({ modal: true })}>
          <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}

export default App;
