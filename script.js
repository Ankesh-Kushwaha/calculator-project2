let calculation=localStorage.getItem('calculation') || '';

displayResult(); //display the result when the page first load;

function updateCalculation(para){
    calculation+=para;

    displayResult();
    localStorage.setItem('calculation',calculation);
}

function displayResult(){
 document.querySelector('.js-result-display').
 innerHTML=calculation;
}