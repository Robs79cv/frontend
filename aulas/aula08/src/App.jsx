import { TarefaProvider } from "./contexts/TarefaContexts";
import FormTarefa from "./pages/FormTarefa";
import ListaTarefa from "./pages/ListaTarefa";

function App () {
  return (
    <TarefaProvider>
      <h1>Lista de Tarefas</h1>
    <FormTarefa />
    <ListaTarefa/>
    </TarefaProvider>
  );
}

export default App;