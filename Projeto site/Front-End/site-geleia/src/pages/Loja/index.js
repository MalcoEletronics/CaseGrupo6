import React, { Component } from 'react';
import sellProducts from './../../components/sellProduct/index'
 
import './styles.css';
class Loja extends Component {
    render(){
        return (   
                <div>
                    <h3>olá estamos na loja</h3> 
                    <sellProducts/>   
                </div>        
        );
    }
}

export default Loja;