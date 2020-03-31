import React, { Component } from 'react';
import BarraTitulo from './Componentes/BarraTitulo'
import Highcharts from 'highcharts'
import moment from 'moment'

moment.locale('es')
class App extends Component {
  state = {
    registros: [1, 2, 3, 4, 5, 6, 7].map(dia =>
      [+moment().add(dia, 'days'), Math.random() * 205]
    )
  }

  componentDidMount() {
    this.initGraphic()
  }
  initGraphic = () => {
    Highcharts.chart('grafico', {
      title: {
        text: "Mi Registro de peso"
      },
      xAxis: {
        type: "datetime"
      },
      series: [{
        name: "test",
        data: this.state.registros
      }]
    })
  }

  renderFila = (registro) => {
    return (
      <tr key={registro[0]}>
        <td>{moment(registro[0]).format('LLLL')}</td>
        <td>{registro[1]}</td>
      </tr>
    )
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
              <div id="grafico" className="z-deph-2 hoverable"></div>
            </div>
            <div className="col s6">
              <table className="z-deph-2 hoverable">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Peso (Lbs)</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.registros.map(registro => (
                      this.renderFila(registro)
                    ))
                  }
                </tbody>
              </table>
            </div>

          </div>
        </main>
        <button className="btn">Click here</button>
      </div>
    );
  }
}

export default App;
