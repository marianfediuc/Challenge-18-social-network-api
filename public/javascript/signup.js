async function signupFormHandler(event) {
    event.preventDefault();

    // getting data from the form
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const github = document.querySelector('#github-signup').value.trim();
    const linkedin = document.querySelector('#linkedin-signup').value.trim();
    const bio = document.querySelector('#bio-signup').value.trim();

    
    if (username && email && password) {
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            email,
            password,
            github,
            linkedin,
            bio
          }),
          headers: { 'Content-Type': 'application/json' }
        }); 
    // check the response status
    if (response.ok) {
        console.log('Log in success!');
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('#form-signup').addEventListener('submit', signupFormHandler); 