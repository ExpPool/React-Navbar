import React, {Component} from 'react';
import logo from './logo.svg'
import './App.css'

class Product extends Component {
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="col s12 m6 l4">
                <div className="card blue-grey darken-1">
                    <div className="card-image white-text">
                        <img src={logo} className="img-responsive"/>
                    </div>
                    <div className="card-content white-text">
                        <h3 className="card-title"><strong>{this.props.judul}</strong></h3>
                        <h4>Rp. {this.props.harga}</h4>
                    </div>
                    <div className="card-action">
                        <a onClick={this.props.deleteCard} id={this.props.id} href="#">Hapus</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;