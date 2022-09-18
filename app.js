// * Console.log() alternatives * \\

//console.table(obj);
//console.dir(obj);

let input = document.getElementById('email-input');
let feedbackMsg = document.getElementById('feedback-message');
let btn = document.getElementById('submit-btn');


btn.addEventListener('click', inputValidation);
function inputValidation() {
    if (input.value === '') {
        feedbackMsg.innerText = 'Field is empty.'
        feedbackMsg.style.display = 'block';
    } else {
        if (!(input.value.includes('@'))) {
            feedbackMsg.innerText = 'Please provide a valid email.'
            feedbackMsg.style.display = 'block';
        }
    }
}
