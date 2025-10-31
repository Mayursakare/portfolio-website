
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Here you can add code to send the form data to your server or an email service

      // For demonstration, we'll just log the values to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      // Optionally, reset the form after submission
      form.reset();
      alert('Thank you for contacting me, ' + name + '! I will get back to you soon.');
    });
  