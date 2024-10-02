function InputNome ({register, error}) {
    const regras = {
        require: "Nome é obrigatório"
    }
    return (
        <>
            <label htmlFor="nome">Nome</label>
            <input type="text" {...register("Nome", regras)}/>
            {error && <p>{error.message}</p>}
        </>
    );

}

export default InputNome;