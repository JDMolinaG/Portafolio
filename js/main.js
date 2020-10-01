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
        '30%',
        '40%',
        '60%',
        '70%',
        '50%',
        '60%',
        '80%'
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

    // card4
    let imagen4DOM = document.getElementById("imagen4").src = datos.tracks[3].album.images[0].url;
    let titulo4DOM = document.getElementById("titulo4").textContent = datos.tracks[3].name;
    let audio4DOM = document.getElementById("audio4").src = datos.tracks[3].preview_url;
    let album4 = document.getElementById("album4").textContent = datos.tracks[3].album.name;

    // card5
    let imagen5DOM = document.getElementById("imagen5").src = datos.tracks[4].album.images[0].url;
    let titulo5DOM = document.getElementById("titulo5").textContent = datos.tracks[4].name;
    let audio5DOM = document.getElementById("audio5").src = datos.tracks[4].preview_url;
    let album5 = document.getElementById("album5").textContent = datos.tracks[4].album.name;

    // card6
    let imagen6DOM = document.getElementById("imagen6").src = datos.tracks[5].album.images[0].url;
    let titulo6DOM = document.getElementById("titulo6").textContent = datos.tracks[5].name;
    let audio6DOM = document.getElementById("audio6").src = datos.tracks[5].preview_url;
    let album6 = document.getElementById("album6").textContent = datos.tracks[5].album.name;

    // card7
    let imagen7DOM = document.getElementById("imagen7").src = datos.tracks[6].album.images[0].url;
    let titulo7DOM = document.getElementById("titulo7").textContent = datos.tracks[6].name;
    let audio7DOM = document.getElementById("audio7").src = datos.tracks[6].preview_url;
    let album7 = document.getElementById("album7").textContent = datos.tracks[6].album.name;

    // card8
    let imagen8DOM = document.getElementById("imagen8").src = datos.tracks[8].album.images[0].url;
    let titulo8DOM = document.getElementById("titulo8").textContent = datos.tracks[8].name;
    let audio8DOM = document.getElementById("audio8").src = datos.tracks[8].preview_url;
    let album8 = document.getElementById("album8").textContent = datos.tracks[8].album.name;

    // card8
    let imagen9DOM = document.getElementById("imagen9").src = datos.tracks[9].album.images[0].url;
    let titulo9DOM = document.getElementById("titulo9").textContent = datos.tracks[9].name;
    let audio9DOM = document.getElementById("audio9").src = datos.tracks[9].preview_url;
    let album9 = document.getElementById("album9").textContent = datos.tracks[9].album.name;
}
let click = 0;

function ocultar() {
    if (click == 0) {
        let ocultar = document.getElementById('ocultar').style.display = "block";
        mostrarmas.textContent = "Mostrar Menos"
        click++;
        location.href = "#ocultar";
    } else {
        let ocultar = document.getElementById('ocultar').style.display = "none";
        mostrarmas.textContent = "Mostrar Mas"
        click--;
    }
}
const mostrarmas = document.getElementById('mostrar-mas');
mostrarmas.addEventListener('click', ocultar, false);