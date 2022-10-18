import api from "../api";

export async function pegarRepositorios(id){
    try{
        const response = await api.get(`/repos?postId=${id}`);
        return response.data;
    }
    catch(error){
        console.log(error);
        return {};
    }
}


export async function editarRepositorio(nome, data, postId,id){
    try{
        const response = await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id:id
        });
        return response.data;
    }
    catch(error){
        console.log(error);
        return {};
    }
}

export async function criarRepositorio(nome, data, postId){
    try{
        const response = await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId,
        });
        return response.data;
    }
    catch(error){
        console.log(error);
        return {};
    }
}

export async function deletarRepositorio(nome, data, postId){
    try{
        await api.delete(`/repos/${id}`);
        return 'Repositório deletado com sucesso!';
    }
    catch(error){
        console.log(error);
        return {};
    }
}




export async function PegarRepositoriosDoUsuarioPeloNome(postId, nome){
    const resultado = await api.get(`/repos?postId=${postId}&name=${nome}`).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        return [];
    })
    return resultado;
}


