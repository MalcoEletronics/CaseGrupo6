import React, { Component } from 'react';
import sellProduct from './../../components/sellProduct/index'
 
import './styles.css';
export default class Loja extends Component {

    render(){
        return (   
                <div className="teste">
                    <h3>olá estamos na loja</h3> 
                    <sellProduct/> 
                </div>        
        );
    }
}