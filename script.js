const currentYear = new Date().getFullYear();

const ageElement = document.getElementById('age-el');

const ageBtn = document.getElementById('age-btn');


ageBtn.addEventListener('click', ()=>{

    const dob = ageElement.value.trim()

    const age = currentYear - dob;

    alert(`You are ${age} Years Old`)


    ageElement.value = ''

})
