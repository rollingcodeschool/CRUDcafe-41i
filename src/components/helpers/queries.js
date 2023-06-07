//llamar a mis variables de entorno

const URLUsuario = import.meta.env.VITE_API_USUARIO;

export const login = async(usuario)=>{
    try{
        const respuesta = await fetch(URLUsuario);
        const listaUsuarios = await respuesta.json();
        //buscar cual usuario tiene el mail
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            console.log('email encontrado');
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado;
            }else{
                console.log('el password es incorrecto');
                return null;
            }
        }else{
            console.log('el email no existe');
            return null
        }       
    }catch(error){
        console.log(error)
    }
}