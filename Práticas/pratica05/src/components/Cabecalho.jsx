import InputPesquisar from "./InputPesquisar";
import Titulo from "./Titulo";
import Icone from "./icone";

function Cabecalho() {
    return (
        <header>
        <div>
          <Icone imagem="" texto="Logo do Aplicação" />
          <Titulo texto="Aluno Online" />
        </div>
        <div> 
          <InputPesquisar />
          <Icone imagem="" texto="Icone Pesquisar" />
        </div>
     </header>
     
    );
  }

  export default Cabecalho;
