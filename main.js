
function CallMenu(){
    let nro_ejercicio = parseInt(
        prompt("ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de Examanes \r\n 3. Calcular el area del rectangulo \r\n 4. Calcular el area del triangulo \r\n 5. Calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. convertir pulgadas \r\n 8. cambiar a dolares \r\n 9. Calcular edad \r\n 10. datos del menor \r\n 11. Bono que recibira el trabajador \r\n 12. Incremento de salario por año al cabo de 6 años \r\n 13. Numero de aprobados y desaprobados \r\n 14. cantidad y colores de focos \r\n 15. Edad para votar")
    );
    if (isNaN(nro_ejercicio)){
        alert("porfavor ingresa valores numericos");
    }else{
        MenuEjercicios(nro_ejercicio)
    }
}

function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingrese el valor 1 a sumar:"));
            let valor2 = parseFloat(prompt("ingrese el valor 2 a sumar:"));
            alert(ej1_sumarValores(valor1,valor2));
        break;

        case 2  :
            let ex1 = parseFloat(prompt("ingrese la primera nota:"));
            let ex2 = parseFloat(prompt("ingrese la segunda nota:"));
            let ex3 = parseFloat(prompt("ingrese la tercera nota:"));
            let ex4 = parseFloat(prompt("ingrese la cuarta nota:"));
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4));
        break;

        case 3 :
            let base_rect =  parseFloat(prompt("ingrese la base del recatngulo"));     
            let altura_rect =  parseFloat(prompt("ingrese la altura del recatngulo"));
            alert(ej3_CalcularAreaReactangulo(base_rect,altura_rect));
        break;

        case 4:
            let base_tri = parseFloat(prompt("ingrese la base del triangulo"));
            let altura_tri = parseFloat(prompt("ingrese la altura del triangulo"));
            alert(ej4_CalcularAreaTriangulo(base_tri,altura_tri));
        break;

        case 5:
            let radio = parseFloat(prompt("ingrese el radio de la circunferencia"));
            const Pi = 3.1416;
            alert(ej5_CalcularAreaCircunferencia(radio,Pi));
        break;

        case 6:
            let horas = parseFloat(prompt("ingrese la cantidad de horas trabajadas en la semana"));
            let salario_hora = parseFloat(prompt("ingrese su salario por hora"));
            alert(ej6_CalcularSeldoSemanal(horas,salario_hora));
        break;

        case 7: 
        let tela_metros = parseFloat(prompt("ingrese la cantidad de tela en metros"));
        const Pulg = 0.0254;
        alert(ej7_CalcularTelaPulg(tela_metros,Pulg));
        break;    

        case 8:
        let soles = parseFloat(prompt("ingrese la cantidad de soles"));
        const dolar = 3.88;
        alert(ej8_CalcularDolares(soles,dolar));
        break;

        case 9:
        let año_nacimiento = parseFloat(prompt("ingrese su año de nacimiento"));
        let año_actual = new Date();
        let año = año_actual.getFullYear();
        alert(ej9_CalcularEdad(año_nacimiento, año));
        break;

        case 10:
        let nombre_1 = prompt("ingrese su nombre"); 
        let edad_1 = parseFloat(prompt("ingrese su edad"));
        let nombre_2 = prompt("ingrese su nombre");
        let edad_2 = parseFloat(prompt("ingrese su edad"));
        let nombre_3 = prompt("ingrese su nombre");
        let edad_3 = parseFloat(prompt("ingrese su edad"));
        alert(ej10_PersonaMenor(nombre_1,edad_1,nombre_2,edad_2,nombre_3,edad_3));
        break;

        case 11:
        let años_servicio = parseInt(prompt("Ingresa la cantidad de años que esta trabajando en la empresa"));
        alert(ej11_bono(años_servicio));
        break;

        case 12:
        alert(ej12_salarioanual());
        break;
        
        case 13:
            let notas=[];
            let n = parseFloat(prompt("Ingrese cantidad de alumnos: "));
            for(var i=0;i<n;i++){
            notas[i]= parseInt(prompt(`Ingrese nota del alumno ${i+1}: `));
            }
            alert(ej13_calificaciones(notas));
        break;

        case 14:
            let focos=[];
            let nf = parseFloat(prompt("Ingrese cantidad de focos: "));
            for(var i=0;i<nf;i++){
            focos[i]=parseInt(prompt("Ingrese color de foco donde: \r\nVerde es 1\r\nRojo es 2\r\nBlanco es 3"));
            }
            alert(ej14_cantidadfocos(focos));
            break;

        case 15:
        let voto = parseInt(prompt("Ingresa tu edad"));
        alert(ej15_edad(voto));
        break;
    }

}



function ej1_sumarValores(a,b){
    if(isNaN(a) || isNaN(b)){
        return" porfavor ingrese valores";
    }else{
        return a + b;
    }
}

function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
    if(isNaN (ex1) || isNaN(ex2)|| isNaN(ex3) || isNaN(ex4)){
        return "porfavor ingresa valores";
    } else{
        return (ex1 + ex2 + ex3 + ex4) /4 ;
    }
    
}

function ej3_CalcularAreaReactangulo(base_rect,altura_rect){
    if(isNaN(base_rect) || isNaN(altura_rect) ){
        return "ingresa valores numericos"
    } else{
        return "el area del rectangulo es: " +base_rect * +altura_rect;
    }

}

function ej4_CalcularAreaTriangulo(base_tri,altura_tri){
    if(isNaN(base_tri) || isNaN(altura_tri) ){
        return "ingresa valores numericos"
    } else{
        return "el area del triangulo es: " +(base_tri * altura_tri)/2;
    }
}

function ej5_CalcularAreaCircunferencia(radio,Pi){
    if (isNaN(radio)) {
        return "ingresa valores numericos";
    } else{
        return "el area de la circunferencia es: " +radio * +(Pi**2);
    }
}

function ej6_CalcularSeldoSemanal(horas,salario_hora){
    if(isNaN(horas) || isNaN(salario_hora) ){
        return "ingresa valores numericos";
    } else{
        return "el sueldo semanal es: " +horas * +salario_hora;
    }
}

function ej7_CalcularTelaPulg(tela_metros,Pulg){
    if(isNaN(tela_metros)){
        return "ingresa valores numericos"
    } else{
        return "La cantidad de tela en pulgadas es : " +tela_metros / +Pulg + " pulgadas";
    }
}

function ej8_CalcularDolares(soles,dolar){
    if(isNaN(soles)){
        return "ingresa valores numericos";
    } 
    else{
        return "La cantidad de tela en pulgadas es : " +soles / +dolar + " dolares";
    }
}

function ej9_CalcularEdad(año_nacimiento,año){
    
    if(isNaN(año_nacimiento)) {
        return "ingresa valores numericos";
    } else if (new Date().getFullYear()-18 <año_nacimiento){
        return "El postulante es menor de Edad";
    }
    else{
        return "El personal contratado tiene : " +(año - año_nacimiento) + " años";
    }
}

function ej10_PersonaMenor(nombre_1,edad_1,nombre_2,edad_2,nombre_3,edad_3){

    if (isNaN(edad_1) || isNaN(edad_2) || isNaN(edad_3)) {
        return "Los valores ingresados no son válidos";
    }
    else {
        if (edad_1 < edad_2) {
            if (edad_1 < edad_3) {
                return `La persona con menor edad es: ${nombre_1} y su edad es: ${edad_1}`;
            }
            else {
                return `La persona con menor edad es: ${nombre_3} y su edad es: ${edad_3}`;
            }
        }
        else {
            if (edad_2 < edad_3) {
                return `La persona con menor edad es: ${nombre_2} y su edad es: ${edad_2}`;
            }
            else {
                return `La persona con menor edad es: ${nombre_3} y su edad es: ${edad_3}`;
            }
        }
    }
}

function ej11_bono(años_servicio){
    if(isNaN(años_servicio))
    {
        return "Por favor, ingresa un valor válido.";
    }
    else
    {
        if(años_servicio > 0)
        {
            años_servicio = parseInt(años_servicio);
            switch (años_servicio) 
            {
                case 1:
                return `El bono que le corresponde es de: $${100}`;
  
                case 2:
                return `El bono que le corresponde es de: $${200}`;
  
                case 3:
                return `El bono que le corresponde es de: $${300}`;
  
                case 4:
                return `El bono que le corresponde es de: $${400}`;
  
                case 5:
                return `El bono que le corresponde es de: $${500}`;
  
                default:
                return `El bono que le corresponde es de: $${1000}`;
    }
        }
        else
        {
            return "No ha cumplido con el tiempo necesario para el bono";
        }
    }  
  }
  

  function ej12_salarioanual()
{
    let texto = " ";
    let sueldo = 1500;
    for(contador = 0; contador < 6 ; contador++)
    {
        sueldo *= 1.10;
        texto += `El salario del profesor en el año ${contador+1} es: $${sueldo.toFixed(2)} \r\n `;
    }
    return texto;
}

function ej13_calificaciones(notas){
    let aprob=0;
    let desaprob=0;
    let respuesta=`Se ingresaron las siguientes notas: `;
    for(var i=0;i<notas.length;i++){
        if(notas[i]>10){
            aprob++;
        }
        else{
            desaprob++;
        }
        respuesta=respuesta+`\r\nNota ${i+1}: ${notas[i]}`;
    }
    respuesta=respuesta+`\r\nSe determina aprobado si la nota es mayor a 11 \r\nCantidad de aprobados es ${aprob} \r\nCantidad de desaprobados es ${desaprob}`;
    return respuesta;
}

function ej14_cantidadfocos(focos){
    let rojo=0;
    let blanco=0;
    let verde=0;
    let respuesta="";
    respuesta=respuesta+`Se ingresaron ${focos.length} focos`;
    for(var i=0;i<focos.length;i++){
        if(focos[i]===1){
            verde++;
        }
        else if(focos[i]===2){
            blanco++;
        }
        else{
            rojo++;
        }
    }
    respuesta=respuesta+`\r\nSe tiene los siguiente focos \r\nCantidad de focos Verde:  ${verde} \r\nCantidad de focos Blancos:  ${blanco}\r\nCantidad de focos Rojos:  ${rojo}`;
    return respuesta;
}

function ej15_edad (voto){
    if(isNaN(voto))
    {
        return "Por favor, ingresa un valor válido.";
    }
    else
    {
        if(a > 17)
        {
            return "Puedes votar en las próximas elecciones.";
        }
        else
        {
            return "Lo siento, aún no tienes la edad suficiente para votar."
        }
    }
  }
