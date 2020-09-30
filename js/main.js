AOS.init();
// menu
$(document).ready(function() {
    $('.toggle').click(function() {
        $('.menu').toggleClass('active');
        $('.fa-bars').toggleClass('toggleact');
    });

});


// barra de progeso
window.addEventListener('scroll', () => {

    let progresoBarra = document.querySelectorAll('.progreso-barra');
    let values = [
        '80%',
        '80%',
        '40%',
        '30%',
        '35%',
        '20%'
    ];
    progresoBarra.forEach((progreso, index) => {
        progreso.style.width = values[index];
    });
});

// api spotify
// llamdo post para consumir api y obtener token
const llave1 = "grant_type=client_credentials";
const llave2 = "client_id=4aab40b9fca048b7bc6e7e68c92ebc11";
const llave3 = "client_secret=a4136001994e4cfdbbd8dbff180cd33e";

const parametrosPOST = {
    method: "POST",
    headers: { "Content-Type": 'application/x-www-form-urlencoded' },
    body: llave1 + "&" + llave2 + "&" + llave3
}

const urlPOST = "https://accounts.spotify.com/api/token";
fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => llamarDatos(datos))

function llamarDatos(datos) {
    let token = datos.access_token;
    token = "Bearer " + token;

    const urlGET = "https://api.spotify.com/v1/artists/3ygJTpJJIK7eEeC2EFRl9D/top-tracks?country=es";

    const parametrosGET = {
        method: "GET",
        headers: { "Authorization": token }
    }

    fetch(urlGET, parametrosGET)
        .then(respuesta => respuesta.json())
        .then(datos => depurarArtista(datos))
}

function depurarArtista(datos) {

    // card1
    let imagen1DOM = document.getElementById("imagen1").src = datos.tracks[0].album.images[0].url;
    let titulo1DOM = document.getElementById("titulo1").textContent = datos.tracks[0].name;
    let audio1DOM = document.getElementById("audio1").src = datos.tracks[0].preview_url;
    let album1 = document.getElementById("album1").textContent = datos.tracks[0].album.name;

    // card2
    let imagen2DOM = document.getElementById("imagen2").src = datos.tracks[1].album.images[0].url;
    let titulo2DOM = document.getElementById("titulo2").textContent = datos.tracks[1].name;
    let audio2DOM = document.getElementById("audio2").src = datos.tracks[1].preview_url;
    let album2 = document.getElementById("album2").textContent = datos.tracks[1].album.name;

    // card3
    let imagen3DOM = document.getElementById("imagen3").src = datos.tracks[2].album.images[0].url;
    let titulo3DOM = document.getElementById("titulo3").textContent = datos.tracks[2].name;
    let audio3DOM = document.getElementById("audio3").src = datos.tracks[2].preview_url;
    let album3 = document.getElementById("album3").textContent = datos.tracks[2].album.name;


}