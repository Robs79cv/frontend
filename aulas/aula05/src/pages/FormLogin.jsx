import { useState } from "react";
import Botao from "../componets/Botao";
import InputEmail from "../componets/InputEmail";
import InputSenha from "../componets/InputSenha";

function FormLogin(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState();

  const efetuarLogin = (e) => {
    e.preventDefault();
    props.navegaPara("/home");
    //chamada ao backend
  }

  return (
    <form onSubmit={efetuarLogin}>
      <InputEmail texto="E-mail" valor={email} mudaValor={setEmail} />
      <InputSenha texto="Senha" valor={senha} mudavalor={setSenha} />
      <Botao texto="Entrar" />
    </form>
  );
}

export default FormLogin;
