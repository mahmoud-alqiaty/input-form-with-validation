var form = document.querySelector('form')
var inputs = document.querySelectorAll('input')
var input_boxes = document.querySelectorAll('.input-box')
var errs = document.querySelectorAll('.err')
var email = document.querySelector('#email')

form.onsubmit = function(e){
  for(let i=0; i<inputs.length; i++){
    if(inputs[i].value === ""){
      e.preventDefault();
      input_boxes[i].classList.add('invalid')
    }
    else{
      input_boxes[i].classList.remove('invalid')
    }
  }

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  if(!email.value.match(pattern)){
    e.preventDefault();
    document.querySelector('.input-box-email').classList.add('invalid')
    document.querySelector('.email-err').innerHTML = 'Looks like this is not an Email'
  }
  else{
    document.querySelector('.input-box-email').classList.remove('invalid')
    document.querySelector('.email-err').innerHTML = "Email can't be empty"
  }
}
