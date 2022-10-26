alert("Bienvenido a la calculadora de promedios");

class Usuario {
    constructor(usuariocorrecto, contraseniacorrecta){
        this.usuariocorrecto = usuariocorrecto;
        this.contraseniacorrecta = contraseniacorrecta;
    } 
}

class Alumno{
    constructor (nombreAlumno, promedio, aprobado){
        this.nombreAlumno = nombreAlumno;
        this.promedio = promedio;
        this.aprobado = aprobado
    }
}

const usuario01 = new Usuario("usuario", "contraseña");

console.log(usuario01)

let AlumnosEvaluados = []

let usuario = document.getElementById("inputUsuario").value;
let contrasenia = Document.getElementById("inputContraseña").value;


if (usuario === usuario01.usuariocorrecto && contrasenia === usuario01.contraseniacorrecta) {
    alert("Bienvenido " + usuario)

    let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"))

    for(let i = 0; i < cantidadAlumnos ; i ++) {

        

        let nombreAlumno = prompt("Ingrese el nombre del alumno");
        let nota1 = parseInt(prompt("Ingrese la nota 1: "));
        let nota2 = parseInt(prompt("Ingrese la nota 2: "));
        let nota3 = parseInt(prompt("Ingrese la nota 3: "));
        let nota4 = parseInt(prompt("Ingrese la nota 4: "));

        let promedio = calculoPromedio (nota1, nota2, nota3, nota4);

        alert("El promedio de " + nombreAlumno + " es " + promedio)

        let aprueba = aprobado (promedio);
        if(promedio >= 7 && promedio <= 10) {
            alert(nombreAlumno + " esta aprobado");
        }else if (promedio >= 0 && promedio < 7) {
            alert(nombreAlumno + " no esta aprobado");
        }else{
            alert ("Los valores ingresados son incorrectos");
        }

        const Alumnno01 = new Alumno(nombreAlumno, promedio, aprueba);

        AlumnosEvaluados.push (Alumnno01);
    }
}else {
    alert("Usuario o Contraseña incorrectos");
}

for(let datos of AlumnosEvaluados) {
    console.log(datos);
}

function menu() {
    alert("Desea continuar?")
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Buscar alumno \n 2)Modificar Alumno \n 3) Salir"));
    return opcion;
}

function buscarAlumno() {
    let alumnoBuscar = prompt ("Ingrese el nombre del alumno: ");
    let Alumno01 = AlumnosEvaluados.find(Alumno01 => Alumno01.nombreAlumno === alumnoBuscar);
    console.log (Alumno01);
}


function modificarAlumno () {

    class Alumno{
        constructor (numeroAlumno, nombreAlumno, promedio, aprobado){
            this.numeroAlumno = numeroAlumno;
            this.nombreAlumno = nombreAlumno;
            this.promedio = promedio;
            this.aprobado = aprobado
        }
    }

    let alumnoBuscar = prompt ("Ingrese el nombre del alumno: ");
    let Alumno = AlumnosEvaluados.find(Alumno01 => Alumno01.nombreAlumno === alumnoBuscar);
    let nombreAlumno = prompt ("Ingrese el nombre del alumno: ");
    let nota1 = parseInt(prompt("Ingrese la nota 1: "));
    let nota2 = parseInt(prompt("Ingrese la nota 2: "));
    let nota3 = parseInt(prompt("Ingrese la nota 3: "));
    let nota4 = parseInt(prompt("Ingrese la nota 4: "));
    let promedio = calculoPromedio (nota1, nota2, nota3, nota4);
    alert("El promedio de " + nombreAlumno + " es " + promedio);
    let aprueba = aprobado (promedio);
        if(promedio >= 7 && promedio <= 10) {
            alert(nombreAlumno + " esta aprobado");
        }else if (promedio >= 0 && promedio < 7) {
            alert(nombreAlumno + " no esta aprobado");
        }else{
            alert ("Los valores ingresados son incorrectos");
        }
    let indice = AlumnosEvaluados.indexOf(Alumno)
    let alumnoModificado = new Alumno(nombreAlumno, promedio, aprueba)
    AlumnosEvaluados.splice(indice, 1, alumnoModificado)
    console.log(AlumnosEvaluados)
}

function salir() {
    alert("¡Hasta pronto!");
}

let opcion = menu();
switch (opcion) {
    case 1:
        buscarAlumno();
        break;
    case 2:
        modificarAlumno();
        break;
    case 3:
        salir();
        break;
}


function calculoPromedio(nota1, nota2, nota3, nota4) {
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    return promedio;
}

function aprobado(promedio) {
    if (promedio >= 7 && promedio<= 10) {
        return true;
    }else{
    return false;
    }
}

console.log(AlumnosEvaluados)
Bienvenida.innerText = `Bienvenido ${usuario}!`;