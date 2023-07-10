//llamar a mis variables de entorno

const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLProducto = import.meta.env.VITE_API_PRODUCTO;

export const login = async(usuario)=>{
    try{
        const respuesta = await fetch(URLUsuario,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        const datos = await respuesta.json();
        return {
            status: respuesta.status,
            nombreUsuario: datos.nombreUsuario
        }
       
    }catch(error){
        console.log(error)
    }
}

/*
GET obtener un listado de elementos o un elemento
POST crear un elemento nuevo en la BD
PUT / PATCH editar un elemento nuevo en la BD
DELETE borra un elemento de la BD 
*/ 

export const consultaListaProductos = async () =>{
    try{
        const respuesta = await fetch(URLProducto);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error);
    }
}
export const consultaProducto = async (id) =>{
    try{
        const respuesta = await fetch(URLProducto+'/'+id);
        const producto = await respuesta.json();
        return producto;
    }catch(error){
        console.log(error);
    }
}

export const consultaBorrarProducto = async (id) =>{
    try{
        const respuesta = await fetch(`${URLProducto}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}
export const consultaAgregarProducto = async (producto) =>{
    try{
        const respuesta = await fetch(URLProducto, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}
export const consultaEditarProducto = async (producto, id) =>{
    try{
        const respuesta = await fetch(URLProducto+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

