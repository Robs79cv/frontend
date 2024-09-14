import Cabecalho from "../src/components/Cabecalho";
import Conteudo from "../src/components/Conteudo";
import Menu from "../src/components/Menu";
import Painel from "../src/components/Painel";
import Secao from "../src/components/Secao";

function Home() {
    return (
     <>
     <Cabecalho></Cabecalho>
<Conteudo>
<Menu />
<Secao texto="Página Inicial">
<div>
  <Painel texto="Mural de Avisos" itens={["Inscrições para Cursos de Extensão", "Evento Maratona de Programação", "Palestra sobre Inteligência Artificial"]} />
  <Painel texto="Agenda Acadêmica" itens={["Semana de Provas P1", "Entrega de Trabalhos", "Apresentação de TCC"]} />
  <Painel texto="Histórico de Notas" itens={["Lógica de Programação - 5,5", "Banco de Dados - 7,8", "Engenharia de Software - 5,3"]} />
  <Painel texto="Histórico de Faltas" itens={["Lógica de Programação - 4", "Banco de Dados - 0", "Engenharia de Software - 1"]} />
</div>

</Secao>

</Conteudo>

     </>
    );
  }
  
  export default Home;