import { useParams } from 'react-router-dom';

function Perfil (){
    const { id } = useParams();
    return (
        <>
        {id == 1?
            <h2>Perfil do usuário</h2>
            :<p>Num Pooode!!</p>}
        </>
    );
}

export default Perfil;