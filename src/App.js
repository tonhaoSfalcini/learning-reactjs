import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormCadastro from './components/FormCadastro';

class App extends Component {
  render() {
    return (
      <section>
        <FormCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
