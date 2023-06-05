//llamar a mis variables de entorno

const URLUsuario = import.meta.env.VITE_API_USUARIO;

export const login = ()=>{
    console.log(URLUsuario);
}