const submit = document.getElementById('signupForm');
const login = document.getElementById('login')

submit.addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  await fetch('http://localhost:8001/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  })
    .then((response) => response.json())
    .then((data) => {
      // alert(data.message)
      console.log(data.message);
      const messageContainer = document.getElementById('messageContainer');
      messageContainer.textContent = data.message;
      form.reset();
    })
    .catch((error) => {
      console.error('Error submitting form:',error);
    });

});



login.addEventListener('click',()=>{
    window.location.href = "./Form-with-backend/login.html"; // Replace with the URL of your login page

})
  
