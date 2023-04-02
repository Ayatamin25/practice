
// const loginsec=document.querySelector('.login-section')
// const loginlink=document.querySelector('.login-link')
// const registerlink=document.querySelector('.register-link')
// registerlink.addEventListener('click',()=>{
//     loginsec.classList.add('active')
// })
// loginlink.addEventListener('click',()=>{
//     loginsec.classList.remove('active')
// })


const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch('/submit-form', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    if (response.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Form submission failed.');
    }
  })
  .catch(function(error) {
    console.error(error);
  });
});
