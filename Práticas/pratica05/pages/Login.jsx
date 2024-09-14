import Botao from "../src/components/Botao";
import Conteudo from "../src/components/Conteudo";
import InputEmail from "../src/components/InputEmail";
import InputSenha from "../src/components/InputSenha";
import Link from "../src/components/Link";
import Rodape from "../src/components/Rodape";
import Titulo from "../src/components/Titulo";
import Icone from "../src/components/icone";

function Login() {
    return (
     <>
     <Conteudo>
     <Icone imagem="" texto="Logo da Aplicação"/>
<Titulo texto="Aluno Online" />
<InputEmail />
<InputSenha />
<Botao texto="Entrar"/>
<Link texto="Esqueceu a Senha?" />

     </Conteudo>
<Rodape texto="Copyright (C) 2024" />

     </>
    );
  }
  
  export default Login;