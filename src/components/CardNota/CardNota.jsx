import React, { Component } from 'react'
import "./style.css"

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header><h2>Título</h2></header>
                <p>Conteúdo</p>
            </section>
        );
    }
}

export default CardNota;