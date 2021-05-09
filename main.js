// select all the buttons
const buttons = document.querySelectorAll('button');

// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');
const displayHistory = document.getElementById('history');


// add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});


// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;


  if (clickedButtonValue === '='){
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      finalCalc();   
    }
  } else if(clickedButtonValue === 'hist'){
    display.value = '';
  }else if(clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  }else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
};


function finalCalc(){
        // calculate and show the answer to display
        const finalValue = eval(display.value);
        

        //history DIV
    const history = document.createElement('div');
    history.classList.add('histContainer');

    //history LI 
    const addToHistory = document.createElement('li');
    addToHistory.innerHTML = `${display.value}= ${finalValue}`;
    addToHistory.classList.add('hist_item');

    history.appendChild(addToHistory);


    //add each history element to render to page
    displayHistory.append(history);
    displayHistory.style.display = "none";

    //set display in calculator to answer
    display.value = finalValue;

    //clear display after 3 secs
    setTimeout(() => {
     display.value = '';
    }, 3000);

}

function seeHistory(){
  displayHistory.style.display = "block";
}

function clearHistory(){
    displayHistory.innerText = '';
};