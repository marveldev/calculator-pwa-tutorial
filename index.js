const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const arithmeticSymbols = ['+', '-', 'X', '÷', '%', '=']

let firstValue = ''
let secondValue = ''
let symbol  = ''
let result = ''

const removeLastValue = () => {
  if (firstValue && !symbol) firstValue = firstValue.slice(0, -1)
  else if (symbol && !secondValue) symbol = ''
  secondValue = secondValue.slice(0, -1)
}

const calculate = () => {
  firstValue = parseFloat(firstValue)
  secondValue = parseFloat(secondValue)

  switch(symbol) {
    case '+':
      result = firstValue + secondValue
      break
    case '-':
      result = firstValue - secondValue
      break
    case 'X':
      result = firstValue * secondValue
      break
    case '÷':
      result = firstValue / secondValue
      break
    case '%':
      result = firstValue % secondValue
      break
  }

  display.innerText = result
  firstValue = result.toString()
  secondValue = ''
}

for (let button of controlButtons) {
  button.addEventListener('click', () => {
    const { innerText: btnValue } = button
    const btnValueIsSymbol = isNaN(btnValue)

    if (btnValue === '') return null

    if (!symbol && !btnValueIsSymbol) {
      firstValue += btnValue
      if (result || result === 0) {
        firstValue = btnValue
        result = ''
      }
    }

    if (symbol && !btnValueIsSymbol) secondValue += btnValue

    if (arithmeticSymbols.includes(btnValue)) {
      if (secondValue) calculate()
      symbol = btnValue

      if (btnValue === '=') symbol = ''
    }

    if (btnValue === 'C') {
      firstValue = secondValue = symbol = ''
      display.innerText = ''
    }

    if (btnValue === '⌫') removeLastValue()

    display.innerText = firstValue + symbol + secondValue
  })
}

/*
  todo: add backspace functionality
  todo: completed
*/

/*
  todo: if the value on the screen is a result, and the user clicks on a number,
   replace the value on the screen with the new number
  todo: completed
*/

/*
  todo: if last character in the display is a symbol and the user clicks on another symbol,
   replace last character with the new symbol
  todo: completed
*/

/*
  todo: fix => if result is 0, calculator stops calculating
  todo: completed
*/
