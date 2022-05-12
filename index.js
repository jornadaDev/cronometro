var sec = 0
var min = 0
var hr = 0
var interval

function twodigits(digit) {
  if (digit < 10) {
    return '0' + digit
  } else {
    return digit
  }
}

function iniciar() {
  relogio()
  interval = setInterval(relogio, 1000)
  console.log('iniciou')
}

function pausar() {
  clearInterval(interval)
  console.log('pausou')
}

function parar() {
  clearInterval(interval)
  sec = 0
  min = 0
  document.getElementById('relogio').innerText = '00:00:00'
  console.log('parou')
}

function relogio() {
  sec++
  if (sec == 60) {
    min++
    sec = 0
    if (min == 60) {
      min = 0
      hr++
    }
  }
  document.getElementById('relogio').innerText =
    twodigits(hr) + twodigits(min) + ':' + twodigits(sec)
}
