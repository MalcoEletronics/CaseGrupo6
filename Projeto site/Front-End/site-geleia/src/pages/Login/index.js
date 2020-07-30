// import React, { Component } from 'react';
// import axios from "axios";
// import './styles.css';

// export default class Login extends Component {
//     render(){

//         const usuarios = axios.get("http://api.github.com/users");

//         return (
//             <body>
//                 olá estamos no Login {usuarios.data[0].login}
//             </body>

//         );
//     }
// }

import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    loginName: null,
    loginInserido: "mojombo",
    senha: null,
    token: null,
    loading: true,
    validado: false,
    error: false,
  };

  pegarDados = async () => {
    this.setState({ loading: true });
    try {
      const resposta = await axios.get("http://api.github.com/users");
      this.setState({ loginName: resposta.data[0].login });
      this.state.loginName === this.state.loginInserido ? this.setState({validado:true}):this.setState({validado:false});
    } catch (error) {
      this.setState({ error: "Algum problema aconteceu" });
    } finally {
      this.setState({ loading: false });
    }
  };

  validarDados = async () => {
    (
      (this.state.loginName === this.state.loginInserido) ?
      this.setState({validado:true}) :
      this.setState({validado:false})
    ); 
  };

  componentDidMount() {
    this.pegarDados();
  }

  render() {
    // const pegarDados = async () => {
    //   try {
    //     const resposta = axios.get("http://api.github.com/users");
    //     this.setState({ loginName: resposta.data[0].login });
    //     alert("fim");
    //   } catch (error) {
    //     alert("algum erro ocorreu");
    //   }
    // };

    return (
      <div>
        <h1>{this.state.error ? this.state.error : this.state.loginName}</h1>
        <h1>{this.state.loading ? "Carregando" : null}</h1>
        <h1>{this.state.validado ? "sim" : "não"}</h1>
      </div>

      

    );
  }
}

export default Login;