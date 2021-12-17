window.onload = iniciar;


function iniciar() {
    let boton = document.getElementById("btnCargar");
    boton.addEventListener('click', clickBoton);
}

async function cargarUrl(url) {
   let response = fetch(url);
   return (await response).json();
}

async function clickBoton() {
    let json = await cargarUrl('https://api.covid19tracking.narrativa.com/api/2020-05-22/country/spain');
    console.log(json)
    
    let estadisticas = json.dates["2020-05-22"].countries.Spain
    console.log(estadisticas);



    today_confirmed: 235290
today_deaths: 28678
today_hospitalised_patients_with_symptoms: 0
today_intensive_care: 11454
today_new_confirmed: 466
today_new_deaths: 50
today_new_hospitalised_patients_with_symptoms: 0
today_new_intensive_care: 20
today_new_open_cases: -381
today_new_recovered: 797
today_new_total_hospitalised_patients: 140
}