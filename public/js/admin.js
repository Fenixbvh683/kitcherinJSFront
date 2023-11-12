var url = window.location;
let params = new URLSearchParams(url.search);
let nr = params.has('nr')

if(params.has('create')){

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado con exito",
        showConfirmButton: false,
        timer: 1500
    })
    window.location.replace('/admin')

}

