function obtenerDigitoVerificador () {
    const textoUsuario = document.getElementById("texto-usuario");
    const Resultado= document.getElementById("Resultado");
    let rol = textoUsuario.value;

    let numeroInvertido = parseInt(rol.split("").reverse().join(""));
    let resultadoMultiplicacion = multiplicarPorSecuencia(numeroInvertido);
    let moduloResultadoMultiplicacion = (resultadoMultiplicacion % 11);
    let digitoVerificador = (11 - moduloResultadoMultiplicacion);
    console.log(digitoVerificador);
    Resultado.innerHTML=rol+"-"+digitoVerificador;
}

function multiplicarPorSecuencia (numero) {
    let numeroStr = numero.toString();
    let longitud = numeroStr.length;
    let secuencia = [2,3,4,5,6,7];

    let resultado = 0;

    for(let i=0; i<longitud; i++) {
        let digito = parseInt(numeroStr.charAt(i));
        let multiplicador = secuencia[i%secuencia.length];
        resultado += digito * multiplicador;
    }
    return resultado;
}
