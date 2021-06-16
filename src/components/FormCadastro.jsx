import React, { Component } from 'react'

class FormCadastro extends Component {
    constructor(){
        super();
        this.titulo = "";
    }
    handleMudancaTitulo(event){
        this.titulo = event.target.value
        console.log(this.titulo)
    }

    render() {
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Título" 
                    onChange={this.handleMudancaTitulo.bind(this)} />
                <textarea 
                    placeholder="Escreva sua nota"
                    rows={15}/>
                <button value="Criar nota"></button>
            </form>
        )
    }
}

export default FormCadastro;