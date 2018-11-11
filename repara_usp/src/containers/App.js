import React, { Component } from 'react';
import './App.css';
import { problemas } from '../problemas';
import CardList from '../components/CardList';
import { Button, ButtonGroup } from 'reactstrap';
import logo from './logo8.jpg'
import hotspot from './hotspot.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }
  onRadioBtnClick(pagina) {
    console.log(pagina);
    this.setState({ pagina });
  }
  render() {
    const problemasFiltrados = problemas.filter(problema =>{
      return problema.estagio === this.state.pagina;
    }); 
    console.log()
    if (this.state.pagina !== 4) {
      return (
        <div className="App">
          <header>
            <div className= "Logo dib">
              <img src={logo} alt="logo"/>
            </div><br/><br/>
            <ButtonGroup className="tc dib">
              <Button color="danger"  onClick={() => this.onRadioBtnClick(1)} active={this.state.pagina === 1}>Avaliando</Button>
              <Button color="warning" onClick={() => this.onRadioBtnClick(2)} active={this.state.pagina === 2}>Processando</Button>
              <Button color="success" onClick={() => this.onRadioBtnClick(3)} active={this.state.pagina === 3}>Concluído</Button>
              <Button color="primary" onClick={() => this.onRadioBtnClick(4)} active={this.state.pagina === 4}>Estatísticas</Button>
            </ButtonGroup>
          </header>
          <CardList problemas={problemasFiltrados} />
        </div>
      );
    } else {
        return (
          <div className="App">
            <header>
              <div className= "Logo dib">
                <img src={logo} alt="logo"/>
              </div><br/><br/>
              <ButtonGroup className="tc dib">
                <Button color="danger"  onClick={() => this.onRadioBtnClick(1)} active={this.state.pagina === 1}>Avaliando</Button>
                <Button color="warning" onClick={() => this.onRadioBtnClick(2)} active={this.state.pagina === 2}>Processando</Button>
                <Button color="success" onClick={() => this.onRadioBtnClick(3)} active={this.state.pagina === 3}>Concluído</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(4)} active={this.state.pagina === 4}>Estatísticas</Button>
              </ButtonGroup>
            </header>
            <div className="dib">
            <img scr={logo} />
            </div>
            <p>Nos últimos 12 meses, foram consertados:</p>
            <div className="dib center ma2 ba overflow-auto">
            <table class="tg tc striped--light-gray pa2 mw8">
              <tr>
                <td class="tg-0lax">Vazamento de água: <br/></td>
                <td class="tg-0lax">4</td>
              </tr>
              <tr>
                <td class="tg-0lax">Ruas e vias: </td>
                <td class="tg-0lax">2</td>
              </tr>
              <tr>
                <td class="tg-0lax">Estrutural: <br/></td>
                <td class="tg-0lax">1</td>
              </tr>
              <tr>
                <td class="tg-0lax">Problema elétrico: <br/></td>
                <td class="tg-0lax">1</td>
              </tr>
            </table>
            </div>
          </div>
        );
    }
  }
}

export default App;
