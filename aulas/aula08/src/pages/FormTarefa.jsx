import { useContext, useState } from "react";

import { TarefaContext } from "../contexts/TarefaContexts";

function FormTarefa() {
    const [tarefa, setTarefa] = useState("");
    const { incluir } = useContext (TarefaContext);
    const handSubmit = (e) => {
        e.preventDefault();
        if (tarefa){
            incluir(tarefa);
            setTarefa('');
        }
    }

    return (<form onSubmit={handSubmit}>
        <input type="text" placeholder="Digite uma tarefa"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
    </form>
    );
}

export default FormTarefa;