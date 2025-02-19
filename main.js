//select form elements
const formEl = document.querySelector('form')
const nameEl = document.getElementById('name')
const kmEl = document.getElementById('km')
const ageEl = document.getElementById('age')
const buttonCalculateEl = document.getElementById('calculate')
const buttonDeleteEl = document.getElementById('annulla')


//select card elements
const cardName = document.getElementById('cardName')
const cardPrice = document.getElementById('cardPrice')

console.log(kmEl, ageEl);


formEl.addEventListener('submit', function(e){

    e.preventDefault();

    const km = parseFloat(kmEl.value); 
    const age = parseInt(ageEl.value); 


    let costo = 0.21 * km

    if (age < 18) {
        costo -= costo * 0.2
    } else if (age >= 65) {
        costo -= costo * 0.4
    }

    cardName.innerHTML = nameEl.value
    cardPrice.innerHTML = costo.toFixed(2)

    console.log(cardName);
    
    
})







