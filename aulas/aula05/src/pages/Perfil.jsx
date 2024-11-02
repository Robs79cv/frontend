import Menu from "../componets/Menu";

function Perfil(props) {
  return (
    <>
      <h1>Perfil do usuario</h1>
      <Menu navegaPara={props.navegaPara} />
    </>
  );
}

export default Perfil;
