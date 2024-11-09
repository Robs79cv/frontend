import { useForm } from 'react-hook-form';

import InputEmail from '../componets/InputEmail';
import InputSenha from '../componets/inputSenha';
import Botao from '../componets/Botao';

function Formulario(props){
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    return <form onSubmit={handleSubmit(props.onEnviar)}>
        <InputEmail register={register} error={errors.email} />
        <InputSenha register={register} error={errors.senha} />
        <Botao texto= "Enviar" />
    </form>
}

export default Formulario;

