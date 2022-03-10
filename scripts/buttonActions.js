import * as stringOperations from "./stringOperations.js"

export default function buttons() {
    // getting all the elements
    //button actions
    let button0 = document.getElementById("zero")
    let button1 = document.getElementById("one")
    let button2 = document.getElementById("two")
    let button3 = document.getElementById("three")
    let button4 = document.getElementById("four")
    let button5 = document.getElementById("five")
    let button6 = document.getElementById("six")
    let button7 = document.getElementById("seven")
    let button8 = document.getElementById("eight")
    let button9 = document.getElementById("nine")
    let buttonX = document.getElementById("ex")
    let buttonSlash = document.getElementById("slash")
    let buttonPlus = document.getElementById("plus")
    let buttonMinus = document.getElementById("minus")
    let buttonDot = document.getElementById("dot")
    let buttonEqual = document.getElementById("equal")
    let buttonDelete = document.getElementById("delete")
    let buttonReset = document.getElementById("reset")

    // Result
    let result = document.getElementById("result")

    //General State solve

    let solutionState = false

    function verifySolution(solution) {
        if (solution){
            result.value = ""
            return !solution
        }
        return solution
    }

    //setting up all event listeners

    //function for numbers
    function placeNumber(number) {
        solutionState = verifySolution(solutionState)
        let resultOnScreen = result.value
        resultOnScreen = stringOperations.addNumber(resultOnScreen,number)
        resultOnScreen = stringOperations.addSeparators(resultOnScreen)
        result.value = resultOnScreen
    }
    //function for primary operations
    function placeOperationPrimary(operation) {
        solutionState = false
        let resultOnScreen = result.value
        resultOnScreen = stringOperations.addOperationPrimary(resultOnScreen,operation)
        result.value = resultOnScreen
    }
    //function for adding secondary operations
    function placeOperationSecondary(operation) {
        solutionState = false
        let resultOnScreen = result.value
        resultOnScreen = stringOperations.addOperationSecondary(resultOnScreen,operation)
        result.value = resultOnScreen
    }

    // ZERO button
    button0.addEventListener('click',e => {
        placeNumber("0")
    })
    //ONE button
    button1.addEventListener('click',e => {
        placeNumber("1")
    })
    //TWO button
    button2.addEventListener('click',e => {
        placeNumber("2")
    })
    //THREE button
    button3.addEventListener('click',e => {
        placeNumber("3")
    })
    //FOUR button
    button4.addEventListener('click',e => {
        placeNumber("4")
    })
    //FIVE button
    button5.addEventListener('click',e => {
        placeNumber("5")
    })
    //SIX button
    button6.addEventListener('click',e => {
        placeNumber("6")
    })
    //SEVEN button
    button7.addEventListener('click',e => {
        placeNumber("7")
    })
    //EIGHT button
    button8.addEventListener('click',e => {
        placeNumber("8")
    })
    //NINE button
    button9.addEventListener('click',e => {
        placeNumber("9")
    })
    //Primary operation +
    buttonPlus.addEventListener('click',e => {
        placeOperationPrimary("+")
    })
    //Primary operation -
    buttonMinus.addEventListener('click',e => {
        placeOperationPrimary("-")
    })
    //Secondary operation *
    buttonX.addEventListener('click',e => {
        placeOperationSecondary("x")
    })
    //Secondary operation /
    buttonSlash.addEventListener('click',e => {
        placeOperationSecondary("/")
    })
    //Adding a dot .
    buttonDot.addEventListener('click',e => {
        solutionState = verifySolution(solutionState)
        let resultOnScreen = result.value
        resultOnScreen = stringOperations.addingDot(resultOnScreen)
        result.value = resultOnScreen
    })
    //Getting result on Screen
    buttonEqual.addEventListener('click',e => {
        let resultOnScreen = result.value
        resultOnScreen = stringOperations.getResult(resultOnScreen)
        resultOnScreen = stringOperations.addSeparators(resultOnScreen)
        result.value = resultOnScreen
        solutionState = true
    })
    //Delete button
    buttonDelete.addEventListener('click',e => {
        let resultOnScreen = result.value
        resultOnScreen = stringOperations.stringDelete(resultOnScreen)
        resultOnScreen = stringOperations.addSeparators(resultOnScreen)
        result.value = resultOnScreen
    })
    //Cleaning Screen
    buttonReset.addEventListener('click',e => {
        result.value = ""
    })
}
