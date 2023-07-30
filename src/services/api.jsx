import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const api = axios.create({
    baseURL: 'https://api.2clix.com.br/v3'
});

export const CreateSession = async (login, senha) => {
    return api.post('Usuario/login', { login, senha })
}

export const ResumoAvaliacoes = async () => {
    return api.get('/Reports/ResumoAvaliacoes?Dtinicio=2023-07-03&DtFim=2023-07-03&codTipoFicha=1')
}