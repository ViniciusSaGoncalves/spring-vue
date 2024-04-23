import axios from "axios";


axios.defaults.baseURL = configuracoesApi.baseURL
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + configuracoesApi.tokenUsuario,
  'AuthorizationSistema': 'Bearer ' + configuracoesApi.tokenSistema
}
axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response.status === 401)
      window.location.href = "/logout"

    return Promise.reject(error)
  }
);

export default axios;