import api from "../api";


export async function buscaUsuario(usuario){
        try{
            const response = await api.get(`/users?login=${usuario}`);   
            return response.data;
        }
        catch(error){
            console.log(error);
            return {};
        }
}