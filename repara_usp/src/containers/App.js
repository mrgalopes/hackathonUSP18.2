import React, { Component } from 'react';
import './App.css';
import { problemas } from '../problemas';
import CardList from '../components/CardList';
import { Button, ButtonGroup } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagina: 1,
    };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }
 onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }
  render() {
    return (
      <div className="App">
        <header>
          <div>
            <h1>ReparaUSP</h1>
            <a><img/></a>
          </div>
          <ButtonGroup>
            <Button className="f6 link dim ph3 pv2 mb2 dib white bg-black" color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.pagina === 1}>Avaliando</Button>
            <Button className="f6 link dim ph3 pv2 mb2 dib white bg-yellow" color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.pagina === 2}>Processando</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.pagina === 3}>Concluído</Button>
            <Button color="primary" onClick={() => this.onRadioBtnClick(4)} active={this.state.pagina === 4}>Estatísticas</Button>
          </ButtonGroup>
        </header>
        <CardList problemas={problemas} />
      </div>
    );
  }
}

export default App;
