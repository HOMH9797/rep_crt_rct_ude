import React, { Component } from 'react';
import BarraTitulo from './Componentes/BarraTitulo'
import moment from 'moment'
import Grafica from './Componentes/Grafica'
import Tabla from './Componentes/Tabla';
import Form from './Componentes/Form'

moment.locale('es')
class App extends Component {
  state = {
    registros: []
  }

  componentDidMount() {
  }
  onCrearRegistro = () => {
    const nuevoRegistro = [+moment(), Math.random() * 200]
    this.setState({
      registros: [...this.state.registros, nuevoRegistro]
    })
  }

  render() {
    const btnAdd = {
      position: "absolute",
      top: "80%",
      right: "10%"
    }

    return (
      <div className="App">
        <Form />
        <BarraTitulo />
        <main>
          <div className="valign-wrapper">
            <h2>Registro diario</h2>
          </div>
          <div className="row">
            <div className="col l6 m12 s12">
              <Grafica registros={this.state.registros} />
            </div>
            <div className="col l6 m12 s12">
              <Tabla registros={this.state.registros} />
            </div>
          </div>
        </main>
        <a className="btn-floating btn-large waves-effect waves-light red"
          style={btnAdd}
          onClick={this.onCrearRegistro}>
          <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}

export default App;
