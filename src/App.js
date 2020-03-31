import React, { Component } from 'react';
import BarraTitulo from './Componentes/BarraTitulo'
import moment from 'moment'
import Grafica from './Componentes/Grafica'
import Tabla from './Componentes/Tabla';

moment.locale('es')
class App extends Component {
  state = {
    registros: [1, 2, 3, 4, 5, 6, 7].map(dia =>
      [+moment().add(dia, 'days'), Math.random() * 205]
    )
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <BarraTitulo />
        <main>
          <div className="valign-wrapper">
            <h2>Registro diario</h2>
          </div>
          <div className="row">

            <div className="col s6">
              <Grafica registros={this.state.registros} />
            </div>
            <div className="col s6">
              <Tabla registros={this.state.registros} />
            </div>

          </div>
        </main>
        <button className="btn">Click here</button>
      </div>
    );
  }
}

export default App;
