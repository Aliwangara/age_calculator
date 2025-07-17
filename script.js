const currentYear = new Date().getFullYear();

const ageElement = document.getElementById('age-el');

const ageBtn = document.getElementById('age-btn');


ageBtn.addEventListener('click', ()=>{

    const dob = ageElement.value.trim()

    const age = currentYear - dob;

   dob > currentYear ? alert(`You are yet to be born`): alert(`You are ${age} Years Old`);


    ageElement.value = ''

})
