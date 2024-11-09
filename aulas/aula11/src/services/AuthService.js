import axios from "axios";

function autenticar(dados) {
  return axios
    .post("http://localhost:3000/login", {
      email: dados.email,
      password: dados.senha,
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      if (error.response){

      }else{
   }
      return { sucesso: false, msg: error.response.data };
    });
}

function cadastrar(dados) {
  return axios
    .post("http://localhost:3000/register", {
      email: dados.email,
      password: dados.senha,
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
    return { sucesso: false, msg: error.message };
    });
}

export { autenticar, cadastrar };
