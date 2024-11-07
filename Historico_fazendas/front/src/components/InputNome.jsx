function InputNome(props) {
    const regras = { 
        required: "Nome é obrigatório"
      }
    return (
     <>
     <label htmlFor="nome">Nome</label>
     {props.error && <p>{props.error.message}</p>}
     </>
    );
  }

export default InputNome;

  