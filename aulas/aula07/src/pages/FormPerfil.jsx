import {useForm} from 'react-hook-form'
import InputEmail from '../componets/InputEmail';
import InputSenha from '../componets/InputSenha';
import InputNome from '../componets/InputNome';

function FormLogin () {
    const {register, handleSubmit, formState: {errors}} = useForm();
    return (
        <form onSubmit={handleSubmit((data) => {})}>
            <InputNome register={register} error={errors.nome} />
            <InputEmail register={register} error={errors.email} />
            <InputSenha register={register} error={errors.senha} />
            <button>Entrar</button>
        </form>
    );
}

export default FormLogin;