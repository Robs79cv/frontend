import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";

function Layout() {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Conteudo>
          <Menu />
          <Outlet />
        </Conteudo>

      </Conteudo>
    </>
  );
}

export default Layout;
