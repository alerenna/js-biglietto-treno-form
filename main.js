
const kmEl = document.getElementById('km')
const ageEl = document.getElementById('age')
const buttonCalculateEl = document.getElementById('calculate')

console.log(kmEl, ageEl);


buttonCalculateEl.addEventListener('click', function(){

    const km = parseFloat(kmEl.value); 
    const age = parseInt(ageEl.value); 


    let costo = 0.21 * km

    if (age < 18) {
        costo -= costo * 0.2
    } else if (age >= 65) {
        costo -= costo * 0.4
    }

    console.log(`Il tuo biglietto costa € ${costo.toFixed(2)}`);
    
})






