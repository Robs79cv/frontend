import { createContext, useState } from "react";
import { autenticar } from "../services/AuthServices";

const AuthContext = createContext();

function AuthProvider(props) {
  const [usuario, setUsuario] = useState({
    email: "",
    perfil: "",
    logado: false,
  });

  const [msg, setMsg] = usestate ("");

  const login = async (dados) => {
    const resposta = await autenticar(dados);
    if (resposta.sucesso) {
      setUsuario({ email: dados.email, perfil: "aluno", logado: true });
      } else {
        setMsg(response.msg);
    }
    
  };

  const logout = () => {
    setUsuario({ email: "", perfil: "", logado: false });
  };

  const registrar = (dados) => {
    setUsuario ({email: dados.email, perfil: "aluno", logado: true});
  }

  const contexto = {
    usuario,
    msg,
    login,
    logout,
    registrar
  };

  return (
    <AuthContext.Provider value={contexto}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider}