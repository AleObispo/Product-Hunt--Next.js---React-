export default function validarCrearProducto(valores){

    let errores = {};

    //validar el nombre del ususario
    if(!valores.nombre){
        errores.nombre = 'El Nombre es obligatorio'
    }

    //validar la empresa
    if(!valores.empresa){
        errores.empresa = 'El Nombre de la Empresa es obligatorio'
    }
   

    //validar la url
    if(!valores.url){
        errores.url = 'La URL del producto es obligatoria'
    }else if ( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url) ) {
        errores.url = 'El formato de URL ingresado no es válido'
    }

    //validar descripcion
    if(!valores.descripcion){
        errores.descripcion = 'Agrega una descripción del producto'
    }
 

    return errores;
}