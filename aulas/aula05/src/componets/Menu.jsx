import Link from "./Link";

function Menu(props) {
  const opcoes = [
    { texto: "Home", rota: "/home" },
    { texto: "Perfil", rota: "/perfil" },
    { texto: "Sair", rota: "/login" },
  ];
  return (
    <nav className="menu">
      <ul>
        {opcoes.map((opcao, index) => (
          <li key={index}>
            <Link rota={opcao.rota} texto={opcao.texto} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
