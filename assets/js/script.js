// let cvvInput = document.getElementById('cvv');
// let cardCvv = document.querySelector('.card-cvv');
// let container = document.getElementById('top');

// let cardNumberInput = document.getElementById('cardNumber');
// let cardNumber = document.querySelector('.card-number');

// let cardNameInput = document.getElementById('cardName');
// let cardName = document.querySelector('.full-name');

// let cardExpiresInput = document.querySelectorAll('.select');
// let cardExpires = document.querySelector('.expires-card');
// let cardMonth = document.getElementById('cardMonth');
// let cardYear = document.getElementById('cardYear');
// let expiresMonth = document.querySelector('.expires-mm');
// let expiresYear = document.querySelector('.expires-yy');


// cvvInput.onfocus = () => {
//     container.classList.add('flip');
// }

// cvvInput.onblur = () => {
//     container.classList.remove('flip');
// }

// cvvInput.oninput = () => {
//     cardCvv.innerHTML = cvvInput.value;
// }

// cardNumberInput.onfocus = () => {
//     cardNumber.classList.add('-card-input')
// }

// cardNumberInput.oninput = () => {
//     cardNumber.innerHTML = cardNumberInput.value;
// }

// cardNumberInput.onkeypress = (evt) => {
//     let charCode = (evt.which) ? evt.which : evt.keyCode
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
//     return true;
// }

// cvvInput.onkeypress = (evt) => {
//     let charCode = (evt.which) ? evt.which : evt.keyCode
//     evt.target.value = evt.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
//     return true;
// }

// cardNumberInput.addEventListener('input', (e) => {
//     e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
// });
// cardNumberInput.onblur = () => {
//     cardNumber.classList.remove('-card-input')
// }

// cardNameInput.onfocus = () => {
//     cardName.classList.add('-card-input')
// }

// cardNameInput.onblur = () => {
//     cardName.classList.remove('-card-input')
// }

// cardNameInput.oninput = () => {
//     cardName.innerHTML = cardNameInput.value;
// }

// cardExpiresInput.forEach((e) => {
//     e.onfocus = () => {
//         cardExpires.classList.add('-card-input')
//     }

//     e.onblur = () => {
//         cardExpires.classList.remove('-card-input')
//     }
// })

// cardMonth.oninput = () => {
//     expiresMonth.innerHTML = cardMonth.value;
// }

// cardYear.oninput = () => {
//     expiresYear.innerHTML = cardYear.value;
// }