const selectAfiliacion = document.querySelector("select#afiliacion")
const selectUbicacion = document.querySelector("select#ubicacion")
const inputGramos = document.querySelector("input#gramos")
const btnCotizar = document.querySelector("button.button.button-outline")
const valorCuota = document.querySelector("span#valorCuota")
const btnGuardar = document.querySelector("span.guardar")

function cargarCombo(select, array) {
    if (array.length > 0) {
        array.forEach(element => {
            select.innerHTML += `<option value="${element.factor}">${element.tipo}</option>`
        });
    }
}
cargarCombo(selectAfiliacion, datosAfiliacion)
cargarCombo(selectUbicacion, datosUbicacion)

function realizarCotizacion() {
    if (selectAfiliacion.value !== "..." & selectUbicacion.value !== "..." && parseInt(inputGramos.value) >= 10 && parseInt(inputGramos.value) <=40) {
        const cotizo = new Cotizador(parseInt(inputGramos.value), selectAfiliacion.value, selectUbicacion.value, costoGramo)
            valorCuota.textContent = cotizo.cotizar()
            toast()
    } else {
        alerta('Cotiza tus gramos', 'Completa todos los valores solicitados en pantalla.', 'warning')
    }
}

btnCotizar.addEventListener("click", realizarCotizacion)

btnGuardar.addEventListener("click", ()=> {
    const historialCotizacion = {
            Propiedad: selectAfiliacion[selectAfiliacion.options.selectedIndex].textContent,
            Ubicacion: selectUbicacion[selectUbicacion.options.selectedIndex].textContent,
            gramos: inputGramos.value,
            fecha: new Date(),
            costoGramo: costoGramo
          }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(historialCotizacion))
})

function alerta(title, text, icon) {
    Swal.fire( {
        timer: 2000,
        timerProgressBar: true,
        title: title,
        text: text,
        icon: icon,
        showConfirmButton: false
    })
}

function toast() {
    Toastify({
        text: "Gracias por cotizar con nosotros.",
        duration: 4000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#588fa1be",
        }
      }).showToast();
}