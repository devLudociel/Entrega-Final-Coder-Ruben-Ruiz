const verCredenciales = document.getElementById("verCredenciales")
const btnLogin = document.getElementById("login")


verCredenciales.addEventListener("click", credenciales);
function credenciales() {

    Swal.fire({
        title: 'Ingesa con:',
        icon: 'info',
        iconColor: '#ecaeae',
        html: ` Nombre: Profesor
                <br>
                password: coder`,
        focusConfirm: false,
        confirmButtonText: 'Okey',
        confirmButtonColor: '#ecaeae',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = ""
        }
    })
};

btnLogin.addEventListener("click", login);
function login(){
    document.querySelector('form')
    .addEventListener('submit', (e) =>{
        e.preventDefault()
        const user = document.getElementById("user").value,
        password = document.getElementById("password").value;
        if (user == "Profesor" && password == "coder"){
            window.location = "./productos.html"
        }
        else {
            Swal.fire({
                title: 'Debes leer las Credenciales:',
                icon: 'info',
                iconColor: '#ecaeae',
                html: ` Presiona sobre el boton
                        <br>
                        ver credenciales`,
                focusConfirm: false,
                confirmButtonText: 'Okey',
                confirmButtonColor: '#ecaeae',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location = ""
                }
            });
        };
    });
};