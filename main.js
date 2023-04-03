const screenDisplayNumber = document.querySelector(".number");
const acButton = document.querySelector(".AC");
const rootButton = document.querySelector(".root");
const negateButton = document.querySelector(".negate");
const divButton = document.querySelector(".div");
const multiplyButton = document.querySelector(".multiply");
const plusButton = document.querySelector(".plus");
const restButton = document.querySelector(".rest");
const dotButton = document.querySelector(".dot");
const equalButton = document.querySelector(".equal");
const allNumbers = document.querySelectorAll(".number-button")

let screenDisplayJoined
let result;
let currentSign = "";
let screenNumber = [];
let hiddenNumber;


const setNumbersEvents = () =>{
    allNumbers.forEach(number => {
        number.addEventListener("click", () => {
            screenNumber.push(number.textContent);
            showNumberInDisplay();
        })
    })
}

const setAcButton = () => {
    acButton.addEventListener("click", () => {
        screenNumber.splice(0, screenNumber.length);
        screenDisplayNumber.textContent = 0;
        currentSign = "";
        hiddenNumber = "";
    })
}

const setDotButton = () => {
    dotButton.addEventListener("click", () =>{
    if(!screenNumber.includes("."))
        screenNumber.push(dotButton.textContent);
    })
}

const showNumberInDisplay = () => {
    screenDisplayJoined = screenNumber.join("");
    screenDisplayNumber.textContent = screenDisplayJoined;
}

const setPlusEvent = () => {
    plusButton.addEventListener("click", () => {
        hiddenNumber = screenDisplayJoined;
        screenNumber.splice(0, screenNumber.length);
        currentSign = plusButton.textContent;
    })
}

const setRestEvent = () => {
    restButton.addEventListener("click", () => {
        hiddenNumber = screenDisplayJoined;
        screenNumber.splice(0, screenNumber.length);
        currentSign = restButton.textContent;
    })
}

const setDivEvent = () => {
    divButton.addEventListener("click", () => {
        hiddenNumber = screenDisplayJoined;
        screenNumber.splice(0, screenNumber.length);
        currentSign = divButton.textContent;
    })
}

const setMultiplyEvent = () => {
    multiplyButton.addEventListener("click", () => {
        hiddenNumber = screenDisplayJoined;
        screenNumber.splice(0, screenNumber.length);
        currentSign = multiplyButton.textContent;
    })
}

const setRootEvent = () => {
    rootButton.addEventListener("click", () => {
        hiddenNumber = screenDisplayJoined;
        screenNumber.splice(0, screenNumber.length);
        currentSign = "v";
    })
}

const setNegateEvent = () => {
    negateButton.addEventListener("click", () => {
        hiddenNumber = screenDisplayJoined;
        screenNumber.splice(0, screenNumber.length);
        currentSign = "!";
    })
}

const setEqualEvent = () => {
    equalButton.addEventListener("click", () => {
        if(currentSign === "+"){
            result = +hiddenNumber + +screenDisplayJoined;
            screenDisplayNumber.textContent = result;
            screenDisplayJoined = result;
            if(!Number.isInteger(result)){
                screenDisplayNumber.textContent = result.toFixed(2);
            }
        }
        if(currentSign === "-"){
            result = +hiddenNumber - +screenDisplayJoined;
            screenDisplayNumber.textContent = result;
            screenDisplayJoined = result;
            if(!Number.isInteger(result)){
                screenDisplayNumber.textContent = result.toFixed(2);
            }
        }
        if(currentSign === "/"){
            if(screenDisplayJoined === "0"){
                screenDisplayNumber.textContent = "Error";
            }
            else{
                result = +hiddenNumber / +screenDisplayJoined;
                screenDisplayNumber.textContent = result;
                screenDisplayJoined = result;
                if(!Number.isInteger(result)){
                    screenDisplayNumber.textContent = result.toFixed(2);
                }
            }
        }
        if(currentSign === "x"){
            result = +hiddenNumber * +screenDisplayJoined;
            screenDisplayNumber.textContent = result;
            screenDisplayJoined = result;
            if(!Number.isInteger(result)){
                screenDisplayNumber.textContent = result.toFixed(2);
            }
        }
        if(currentSign === "v"){
            result = Math.sqrt(screenDisplayJoined);
            screenDisplayNumber.textContent = result;
            screenDisplayJoined = result;
            if(!Number.isInteger(result)){
                screenDisplayNumber.textContent = result.toFixed(2);
            }
        }
        if(currentSign === "!"){
            screenDisplayNumber.textContent = screenDisplayNumber.textContent * -1;
            if(!Number.isInteger(result)){
                screenDisplayNumber.textContent = screenDisplayNumber.textContent.toFixed(2);
            }
            screenDisplayJoined = screenDisplayNumber.textContent;
            hiddenNumber = screenDisplayJoined;
        }
    })
}

const calculator = () => {
    setDotButton();
    setAcButton();
    setPlusEvent();
    setRestEvent();
    setDivEvent();
    setMultiplyEvent();
    setRootEvent();
    setNegateEvent();
    setEqualEvent();
    setNumbersEvents();
}

calculator();