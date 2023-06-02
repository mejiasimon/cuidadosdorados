export async function recibir(){
    const URL="http://pruegaapi20231.vercel.app/buscarReservas"

    //2. CONFIGURAR LA PETICION DE ENVIO
    const PETICION={
        method:"GET", //GET POST PUT DELETE
        //headers:{}, //DATOS DE CONTROL *******
        //body:"" //POST PUT *******
    }

    //3. SIEMPRE DEBO COMUNICARME CON EL BACK
    //FETCH
    let respuestaDelServidor=await fetch(URL,PETICION)
    let datosConsultados=await respuestaDelServidor.json()
    return datosConsultados


}