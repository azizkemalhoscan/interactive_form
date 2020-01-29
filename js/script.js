
//  Default focus on name element when page is opened
//  1st part
document.getElementById('name').focus();


//  2nd part
var pickForTextField = document.getElementById('title');
var firstFieldset =  document.querySelector('fieldset');
var pickOther = pickForTextField.lastElementChild;


//  changed "mouseover" to 'change' action


pickForTextField.addEventListener('change', (e) => {
  var input = document.createElement("INPUT");
  input.type = "text";
  input.name =  "job_role_other";
  input.setAttribute("id", "other-title");
  input.placeholder = "Your job role";
  if(e.target.value === 'other'){
      return firstFieldset.insertBefore(input, pickForTextField);
  }

  pickOther.style.display = 'none';
})

//  3rd part

var selectThemeHide = document.getElementById('design').firstElementChild.style.display = 'none';
var selectTshirtTheme = document.createElement('OPTION');
selectTshirtTheme.placeholder = "Please select a T-shirt theme";


var changeColorString  = document.getElementById('color').firstElementChild;
changeColorString.textContent = 'Please select a T-shirt theme';
var hideColors = document.getElementById('color');
var deneme = hideColors.querySelectorAll('option');
deneme.forEach(element => {
  element.style.display = 'none';
})

// hideColors.style.display =

// Select themes and display their relative values...

// Good name convention is really important
//  My code is really long, should find a way to refactor.



var b  = document.getElementById('design');
/* What I do here is filtering the optional colors
to be selected according to the themes
*/

// Additional work needed (for the first line of string)
b.addEventListener('change', (e) =>{
  deneme.forEach(element => {
  element.style.display = 'none';
})
  if(e.target.value === "js puns"){
    changeColorString.remove();
    for( let i = 0; i <deneme.length -2; i++){
      deneme[i].style.display = 'block';
    }
  } else {
    for( let i = 3; i <deneme.length; i++){
      deneme[i].style.display = 'block';
    }
  }
})

// ACTIVITY SECTION;

//  use eventhanbdler change method

// use conditionals to implement the desired logic.

//  total activity cost
const activities = document.querySelector('.activities');
const legend = document.getElementsByName('legend');
const costElementDiv = document.createElement('DIV');
activities.appendChild(costElementDiv);
let totalCost = 0;



activities.addEventListener('change', (e) => {
    let cost = parseInt(e.target.dataset.cost);
    if (e.target.checked) {

        totalCost += cost;

    } else {
        totalCost -= cost;
    }
    costElementDiv.textContent = `Total  $${totalCost}`;

    if (totalCost === 0) {
        costElementDiv.style.display = 'none';
    } else {
        costElementDiv.style.display = 'block';
    }

    const checkbox = document.querySelectorAll('.activities input');
    const label = document.querySelectorAll('.activities label');

    for (let i = 0; i < checkbox.length; i++) {


        if (checkbox[i].dataset.dayAndTime ===  e.target.dataset.dayAndTime) {
            checkbox[i].disabled = true;
            label[i].style.color = "#717171";
            console.log('true');
        }

    }
});



// var deneme2 = document.querySelector('.activities').children;
// console.log(deneme2);


/*
PAYMENT SECTION
*/
const paymentSection = document.getElementById('payment');
paymentSection.firstElementChild.remove();
const creditCardDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv =  document.getElementById('bitcoin');
paypalDiv.style.display = 'none';
bitcoinDiv.style.display = 'none';

// Payment options display conditionals are set.

paymentSection.addEventListener('change', (e) => {
  if(e.target.value === 'paypal'){
      creditCardDiv.style.display = 'none';
      bitcoinDiv.style.display = 'none';
      paypalDiv.style.display = 'block';
  } else if(e.target.value === 'bitcoin') {
      creditCardDiv.style.display = 'none';
      bitcoinDiv.style.display = 'block';
      paypalDiv.style.display = 'none';
  } else if(e.target.value === 'credit card'){
      creditCardDiv.style.display = 'block';
      bitcoinDiv.style.display = 'none';
      paypalDiv.style.display = 'none';
  }
})


// Validation functions are created by using
// Constraints are defined as in if statements condition

const validateName = () => {
  const validName = document.getElementById('name');
  const validNameRegex = /^[A-za-z]+\s+[A-za-z]+$/;
  if(validNameRegex.test(validName.value)){
    return true;
  } else {
    return false;
  }
}
// /^[A-Za-z]+\s?([A-Za-z]+)?$

const validateEmail = () => {
  const validEmail = document.getElementById('mail');
  const validEmailRegex = /[a-z]+@[a-z]+.[a-z]/;
  if(validEmailRegex.test(validEmail.value)){
    return true;
  } else {
    return false;
  }
}



const validateActivity = () => {
  const validActivity = document.querySelectorAll('input[type="checkbox"]');
  for(let i = 0; i < validActivity.length; i++){
    if(validActivity[i].checked === true){
      return true;
    } else {
      return false;
    }
  }
}

const validateCreditCard = () => {
  const validCard = document.getElementById('cc-num');
  const validCardRegex = /^[0-9]{12,15}$/;
  if(validCardRegex.test(validCard.value)){
    return true;
  } else {
    return false;
  }
}

const validateZipCode = () => {
  const validZip = document.getElementById('zip');
  const validZipRegex = /[0-9]{4}/;
  if(validZipRegex.test(validZip.value)){
    return true;
  } else {
    return false;
  }
}

const validateCVV = () => {
  const validCvv = document.getElementById('cvv');
  const validCvvRegex = /[0-9]{2}/;
  if(validCvvRegex.test(validCvv.value)){
    return true;
  } else {
    return false;
  }

}

// Error message part completed but not still used.
// Place
// const errorMessageName = () => {
//   if(validateName() === false){
//     return 'Please type a valid name.'
//   }
// }

// const errorMessageEmail = () => {
//   if(validateEmail() === false){
//     return 'Please type a valid email.'
//   }
// }

// const errorMessageCreditCard = () => {
//   if(validateCreditCard() === false){
//     return 'Please type a valid credit card number.'
//   }
// }

// const errorMessageZipCode = (a) => {
//   if(validateZipCode() === false){
//     return 'Please type a valid zipcode.'
//   }
// }

// const errorMessageCvv = (a) => {
//   if(validateCVV() === false){
//     return 'Please type a valid CVV.'
//   }
// }

//  Locators for eventlistener are specified
const validNameField = document.getElementById('name');
const validEmailField = document.getElementById('mail');
const validActivityField = document.querySelectorAll('.activities input');
const validCardField = document.getElementById('cc-num');
const validZipField = document.getElementById('zip');
const validCvvField = document.getElementById('cvv');
const form = document.querySelector('form');

// Event listeners for validating input areas are created.
// Added event listener to the froms submit button.
// Made red if the input area is wrongly filled or unfilled at all.
// Create activities part.


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(validateName() === true){
    return validNameField.style.borderColor = 'rgb(111, 157, 220)';
  } else {
    return validNameField.style.borderColor = 'red';
  }

})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(validateEmail() === true){
    return validEmailField.style.borderColor = 'rgb(111, 157, 220)';
  } else {
    return validEmailField.style.borderColor = 'red';
  }

})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(validateCreditCard() === true){
    return validCardField.style.borderColor = 'rgb(111, 157, 220)';
  } else {
    return validCardField.style.borderColor = 'red';
  }

})


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(validateZipCode() === true){
    return validZipField.style.borderColor = 'rgb(111, 157, 220)';
  } else {
    return validZipField.style.borderColor = 'red';
  }

})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(validateCVV() === true){
    return validCvvField.style.borderColor = 'rgb(111, 157, 220)';
  } else {
    return validCvvField.style.borderColor = 'red';
  }

})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let legend = document.querySelector('.activities legend');
  if(validateActivity() === true){
  } else {
    return legend.style.color = 'red';
  }
})









