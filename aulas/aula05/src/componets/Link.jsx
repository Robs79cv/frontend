function Link(props) {
    const aoclicar= (e) => {
        e.preventDefault();
        props.navegaPara(e.target.getAttribute("href"));
    }
  return (
    <a href={props.rota} onClick={aoclicar}>
      {props.texto}
    </a>
  );
}

export default Link;
