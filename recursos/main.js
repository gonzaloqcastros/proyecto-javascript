
class Alumno{
    constructor (id, nombreAlumno, nota1, nota2, nota3, nota4, promedio, aprobado){
        this.id = id;
        this.nombreAlumno = nombreAlumno;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.promedio = promedio;
        this.aprobado = aprobado;
    }
}

class Usuario {
    constructor(usuariocorrecto, contraseniacorrecta){
        this.usuariocorrecto = usuariocorrecto;
        this.contraseniacorrecta = contraseniacorrecta;
    } 
}
const usuario01 = new Usuario("usuario", "1234")

console.log (usuario01);

let Alumnos = []



function inicializarElementos() {
    formularioLogin = document.getElementById(
      "formularioLogin"
    );
    inputUsuario = document.getElementById("inputUsuario");
    inputContraseña = document.getElementById("inputContraseña")
    contenedorLogin = document.getElementById("contenedorLogin");

    contenedorUsuario = document.getElementById("contenedorUsuario");
    textoUsuario = document.getElementById("textoUsuario");
  
    botonLimpiarStorage = document.getElementById("limpiarStorage");
    formulario = document.getElementById("formularioAgregarAlumno");
    inputId = document.getElementById("inputId");
    inputNombreAlumno = document.getElementById("inputNombreAlumno");
    inputNota1 = document.getElementById("inputNota1");
    inputNota2 = document.getElementById("inputNota2");
    inputNota3 = document.getElementById("inputNota3");
    inputNota4 = document.getElementById("inputNota4");
    contenedorAlumnos = document.getElementById("contenedorAlumnos");
  
    botonesCerrarModalAgregarAlumno = document.getElementsByClassName(
      "btnCerrarModalAgregarAlumno"
    );
    modalAddAlumno = document.getElementById("modalAddAlumno");
    botonAgregarAlumno = document.getElementById("btnAgregarAlumno");
    modal = new bootstrap.Modal(modalAddAlumno);
  }



  function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
    formularioLogin.onsubmit = (event) => identificarUsuario(event);
    botonLimpiarStorage.onclick = eliminarStorage;
    botonAgregarAlumno.onclick = abrirModalAgregarAlumno;
  
    for (const boton of botonesCerrarModalAgregarAlumno) {
      boton.onclick = cerrarModalAgregarAlumno;
    }
  }
  
  function abrirModalAgregarAlumno() {
    if (usuario) {
      modal.show();
    } else {
      alert("Identifíquese antes de agregar un Alumno");
    }
  }
  
  function cerrarModalAgregarAlumno() {
    formulario.reset();
    modal.hide();
  }
  
  function eliminarStorage() {
    localStorage.clear();
    usuario = "";
    Alumnos = [];
    mostrarFormularioLogin();
    mostrarAlumnos();
  }
  
  function identificarUsuario(event) {
    if (inputContraseña.value === usuario01.contraseniacorrecta && inputUsuario.value === usuario01.usuariocorrecto){
    event.preventDefault();
    usuario = inputUsuario.value;
    formularioLogin.reset();
    actualizarUsuarioStorage();
    mostrarTextoUsuario();
}else {
    alert("Contraseña o usuario incorrectos");
}
  }
  
  function mostrarTextoUsuario() {
    contenedorLogin.hidden = true;
    contenedorUsuario.hidden = false;
    textoUsuario.innerHTML += ` ${usuario}`;
  }
  
  function mostrarFormularioLogin() {
    contenedorLogin.hidden = false;
    contenedorUsuario.hidden = true;
    textoUsuario.innerHTML = ``;
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

  function validarFormulario(event) {
    event.preventDefault();
    let idAlumno = inputId.value;
    let nombreAlumno = inputNombreAlumno.value;
    let nota1 = parseFloat(inputNota1.value);
    let nota2 = parseFloat(inputNota2.value);
    let nota3 = parseFloat(inputNota3.value);
    let nota4 = parseFloat(inputNota4.value);
    let promedio = calculoPromedio (nota1, nota2, nota3, nota4)
    let aprueba = aprobado (promedio);
    if(promedio >= 7 && promedio <= 10) {
        aprueba = "esta aprobado";
    }else if (promedio >= 0 && promedio < 7) {
        aprueba = "no esta aprobado";
    }else{
        aprueba = "Los valores ingresados son incorrectos";
    }

    const idExiste = Alumnos.some((Alumno) => Alumno.id === idAlumno);
    if (!idExiste) {
      let alumno = new Alumno(
        idAlumno,
        nombreAlumno,
        nota1,
        nota2,
        nota3,
        nota4,
        promedio,
        aprueba
      );
  
      Alumnos.push(alumno);
      formulario.reset();
      actualizarAlumnosStorage();
      mostrarAlumnos();
      mostrarMensajeConfirmacion(
        `El Alumno ${nombreAlumno} fue agregado exitosamente`,
        "info"
      );
    } else {
      alert("El id ya existe");
    }
  }
  
  function confirmarEliminacion(idAlumno) {
    Swal.fire({
      icon: "question",
      title: "¿Estas seguro que quieres eliminar el Alumno?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarAlumno(idAlumno);
      }
    });
  }
  
  function eliminarAlumno(idAlumno) {
    let columnaBorrar = document.getElementById(`columna-${idAlumno}`);
    let indiceBorrar = Alumnos.findIndex(
      (Alumno) => Number(Alumno.id) === Number(idAlumno)
    );
  
    let nombreAlumnoEliminado = Alumnos[indiceBorrar].nombreAlumno;
    Alumnos.splice(indiceBorrar, 1);
    columnaBorrar.remove();
    actualizarAlumnosStorage();
    mostrarMensajeConfirmacion(
      `El Alumno ${nombreAlumnoEliminado} fue eliminado exitosamente`,
      "danger"
    );
  }
  
  
  function mostrarAlumnos() {
    contenedorAlumnos.innerHTML = "";
    Alumnos.forEach((Alumno) => {
      let column = document.createElement("div");
      column.className = "col-md-4 mt-3";
      column.id = `columna-${Alumno.id}`;
      column.innerHTML = `
              <div class="card">
                  <div class="card-body">
                  <p class="card-text">ID:
                      <b>${Alumno.id}</b>
                  </p>
                  <p class="card-text">Nombre:
                      <b>${Alumno.nombreAlumno}</b>
                  </p>
                  <p class="card-text">Promedio:
                      <b>${Alumno.promedio}</b>
                  </p>
                  <p class="card-text">Aprobado:
                      <b>${Alumno.aprobado}</b>
                  </p>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn-danger" id="botonEliminar-${Alumno.id}" >Eliminar</button>
                  </div>
              </div>`;
  
      contenedorAlumnos.append(column);
  
      let botonEliminar = document.getElementById(`botonEliminar-${Alumno.id}`);
      botonEliminar.onclick = () => confirmarEliminacion(Alumno.id);
    });
  }
  
  function actualizarAlumnosStorage() {
    let alumnosJSON = JSON.stringify(Alumnos);
    localStorage.setItem("Alumnos", alumnosJSON);
  }
  
  function actualizarUsuarioStorage() {
    localStorage.setItem("usuario", usuario);
  }
  
  function obtenerAlumnosStorage() {
    let alumnosJSON = localStorage.getItem("Alumnos");
    if (alumnosJSON) {
      Alumnos = JSON.parse(alumnosJSON);
      mostrarAlumnos();
    }
  }
  
  function obtenerUsuarioStorage() {
    let usuarioAlmacenado = localStorage.getItem("usuario");
    if (usuarioAlmacenado) {
      usuario = usuarioAlmacenado;
      mostrarTextoUsuario();
    }
  }
  
  function mostrarMensajeConfirmacion(mensaje, clase) {
    Toastify({
      text: mensaje,
      duration: 30000,
      close: true,
      gravity: "top",
      position: "right",
      className: clase
    }).showToast();
  }
  
  function main() {
    inicializarElementos();
    inicializarEventos();
    obtenerAlumnosStorage();
    obtenerUsuarioStorage();
  }
  


  main();


