import Botao from "../src/components/Botao";
import Cabecalho from "../src/components/Cabecalho";
import Conteudo from "../src/components/Conteudo";
import InputEmail from "../src/components/InputEmail";
import InputSenha from "../src/components/InputSenha";
import Menu from "../src/components/Menu";
import Secao from "../src/components/Secao";

function Perfil() {
    return (
     <>
     <Cabecalho></Cabecalho>
<Conteudo>
<Menu />
<Secao texto="Perfil do Usuário">
<InputEmail />
<InputSenha />
<Botao texto="Salvar" />

</Secao>

</Conteudo>

     </>
    );
  }
  
  export default Perfil;
