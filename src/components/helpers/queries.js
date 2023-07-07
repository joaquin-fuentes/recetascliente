// llamar a la variable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO
const URL_ARTICULO = import.meta.env.VITE_API_ARTICULO


export const login = async (usuario)=>{
    
    console.log(usuario)
    try {
        const respuesta = await fetch(`${URL_USUARIO}/usuarios`);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios)
        //buscar si algun usuario coincide con el que recibi por parametros
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=>itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            console.log("email encontrado")
            //verificar el password
            if(usuarioBuscado.password === usuario.password){
                console.log("encontramos al usuario")
                return usuarioBuscado
            } else {
                console.log("password incorrecto")
                return null
            }
        } else {
            console.log("email incorrecto")
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

export const obtenerArticulos = async ()=>{
    try {
        const respuesta = await fetch(`${URL_ARTICULO}/recetas`)
        const listaArticulos = await respuesta.json()
        return listaArticulos

    } catch (error) {
        console.log(error)
        return null
    }
}


export const obtenerArticulo = async (id)=>{
    try {
        const respuesta = await fetch(`${URL_ARTICULO}/recetas/${id}`)
        const articuloEditar = await respuesta.json()
        return articuloEditar

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaBorrarArticulo = async (id)=>{
    try {
        const respuesta = await fetch(`${URL_ARTICULO}/recetas/${id}` , {
            method:"DELETE"
        });
        // const listaArticulos = await respuesta.json()
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaCrearArticulo = async (articulo)=>{
    try {
        const respuesta = await fetch(`${URL_ARTICULO}/recetas`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(articulo)
        });
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}

export const consultaEditarArticulo = async (articulo, id)=>{
    try {
        const respuesta = await fetch(URL_ARTICULO+"/recetas/"+id, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(articulo)
        });
        return respuesta

    } catch (error) {
        console.log(error)
        return null
    }
}
