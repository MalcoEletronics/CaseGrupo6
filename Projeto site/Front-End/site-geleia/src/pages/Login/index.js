import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      loginName: null,          //login capturado da base de dados do backEnd
      loginInserido: "mojombo", //Simulando que o usuário insira o login mojombo//
      senha: null,              //senha do usuário armezenada no back
      token: null,              //token de verificação após validação
      loading: true,        
      validado: false,          //validação se o usuário e senha batem com o do banco de dados
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

  // mudarNome (){
  //   this.setState({loginInserido:"Malco"});
  // };

  componentDidMount() {
    this.pegarDados();
  }

  render() {
    const { loginName, loginInserido, senha, token, loading, validado, error} = this.state;
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