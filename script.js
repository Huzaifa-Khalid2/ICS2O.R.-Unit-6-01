document.getElementById('my-btn').addEventListener('click', myFunction)
let number = 0
function myFunction() {
  number = document.getElementById('my-text').value
  number = parseInt (number)
  if (number == '3') {
    alert ('true')
  }
  else 
  { 
    alert('false')
  }
}
