import React, { Component } from 'react';
import sellProduct from './../../components/sellProduct/index.js'
 
import './styles.css';
export default class Loja extends Component {
    render(){
        return (
            <body>
                <h3>olá estamos na loja</h3>
                <sellProduct/>                      

            </body>
        );
    }
}