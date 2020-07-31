import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import './styles.css';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      loginName: "malco",          //login capturado da base de dados do backEnd
      loginInserido: null,        //Simulando que o usuário insira o login mojombo//
      senha: "123",               //senha do usuário armezenada no back
      senhaInserida: null,        //senha inserida pelo usuário
      token: null,                //token de verificação após validação
      loading: true,            
      validado: false,            //validação se o usuário e senha batem com o do banco de dados
      error: false,
  }
  
  };

  pegarDados = async () => {            //captura os dados do backend e compara com o inserido pelo usuário
    this.setState({ loading: true });
    try {
      const resposta = await axios.get("http://api.github.com/users");
      this.setState({ loginName: resposta.data[0].login });
      this.state.loginName === this.state.loginInserido ?
        this.setState({validado:true}):
        this.setState({validado:false})
      ;
    } catch (error) {
      this.setState({ error: "Algum problema aconteceu" });
    } finally {
      this.setState({ loading: false });
    }
  };

  takeLogin = (e) => {
    this.setState({ loginInserido: e.target.value });
  };

  takePass = (f) => {
    this.setState({ senhaInserida: f.target.value });
  };

  verifyData = () => {
    (this.state.loginInserido === this.state.loginName) ?
    this.setState({validado:true}) : this.setState({validado:false})
  };

  // mudarNome (){
  //   this.setState({loginInserido:"Malco"});
  // };

  componentDidMount() {
    this.pegarDados();
  }

  render() {
    const { loginName, loginInserido, senha, token, loading, validado, error} = this.state;
    return (
      // <div>
      //   <h1>{this.state.error ? this.state.error : this.state.loginName}</h1>
      //   <h1>{this.state.loading ? "Carregando" : null}</h1>
      //   <h1>{this.state.validado ? "sim" : "não"}</h1>                        
      // </div>   
      <div>
        <div className="caixaLogin">
          <h1>Login</h1>
          <h2>Digite seu Login:</h2>
          <input type="text" onChange={this.takeLogin}/>

          <h2>Digite sua senha:</h2>
          <input type="password" onChange={this.takePass}/>

          <button className="botaoLogar" onClick={this.verifyData}>Login</button>

          <h2>{this.state.validado?"sim":"não"}</h2>

        </div>        
      </div>
    );
  }
}

export default Login;