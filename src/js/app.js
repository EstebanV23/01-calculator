const $ = selector => document.querySelector(selector)
const screen = $('.screen')
const buttons = document.querySelectorAll('button')

// Controled by buttons

buttons.forEach(numero => {
  numero.addEventListener('click', (e) => {
    const key = e.target.innerText
    if (key === '=') {
      screen.innerText = roundToTwo(eval(screen.innerText))
    } else if (key === '*') {
      screen.append('*')
    } else if (key === 'AC') {
      const arr = [...screen.innerText] // convierto el contenido del screen en un array de caracteres
      screen.innerText = (arr.slice(0, arr.length - 1)).join('') // Corto y extraigo todo el array excepto el ultimo caracter y lo convierto en string denuevo
    } else screen.append(key)
  })
})

function roundToTwo (num) {
  return Number((Math.round(num + 'e+2') + 'e-2'))
}

// Controled by keyboard

window.addEventListener('keydown', teclaPresionada)

function teclaPresionada (e) {
  /* console.log(e) */
  filtrarTecla(e.key)
}

function filtrarTecla (tecla) {
  const teclasPosibles = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/', '%']

  if (tecla === 'Enter' || tecla === '=') {
    screen.innerText = roundToTwo(eval(screen.innerText))
  }

  if (tecla === 'Backspace') {
    const arr = [...screen.innerText]
    screen.innerText = (arr.slice(0, arr.length - 1)).join('')
  }

  if (teclasPosibles.includes(tecla)) {
    screen.append(tecla)
  }
}
